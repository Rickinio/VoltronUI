import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as IMessagesState from '../../store/Messages';
import MessageList from './MessageList';
import MessageParsedText, { IParsedLine } from './MessageParsedText';
import TextInput, { ITextInput } from '../common/TextInput';
import CheckboxInput, { ICheckboxInput } from '../common/CheckboxInput';
import { ScrapedDataFields } from '../common/FieldSelector';

type IMessagesProps = IMessagesState.IMessagePageState & typeof IMessagesState.actionCreators;

interface IMessageState {
    selectedMessage: IMessagesState.IMessage;
}

class MessagePage extends React.Component<IMessagesProps, IMessageState> {
    constructor(props, context) {
        super(props, context)
        this.state = {
            selectedMessage: this.props.selectedMessage
        }

        this.setSelectedMessage = this.setSelectedMessage.bind(this);
        this.updateScrapedData = this.updateScrapedData.bind(this);
        this.getScrapedData = this.getScrapedData.bind(this);
    }

    componentWillMount() {
        this.props.requestMessages();
        this.setState({ selectedMessage: Object.assign({}, this.props.selectedMessage) });
    }

    componentWillReceiveProps(nextProps: IMessagesProps) {
        //this.props.requestMessages();
        this.setState({ selectedMessage: Object.assign({}, nextProps.selectedMessage) });
    }

    private buildParsedTextTable(parsedTextTable: Array<any>, scrapedDataForm: Array<any>): void {
        if (this.state.selectedMessage.parsedText) {
            parsedTextTable.push(<MessageParsedText key={this.state.selectedMessage.id} message={this.state.selectedMessage} onDoubleClick={this.getScrapedData} />);
            this.buildScrapedDataForm(scrapedDataForm);
        }
        else {
            parsedTextTable = [];
        }
    }

    private buildScrapedDataForm(scrapedDataForm: Array<any>): void {
        if (this.state.selectedMessage && this.state.selectedMessage.scrapedData && this.state.selectedMessage.scrapedData.vessel) {
            for (let key in this.state.selectedMessage.scrapedData) {
                let FieldComponent = ScrapedDataFields[key];
                if (FieldComponent == CheckboxInput) {
                    let checkboxInputParams: ICheckboxInput = {
                        error: '',
                        label: key,
                        name: key,
                        onChange: this.updateScrapedData,
                        value: this.state.selectedMessage.scrapedData[key]
                    }
                    scrapedDataForm.push(<FieldComponent key={key} {...checkboxInputParams} />);
                }
                else if (FieldComponent == TextInput) {
                    let textInputParams: ITextInput = {
                        error: '',
                        label: key,
                        name: key,
                        onChange: this.updateScrapedData,
                        placeholder: '',
                        value: this.state.selectedMessage.scrapedData[key]
                    };
                    scrapedDataForm.push(<FieldComponent key={key} {...textInputParams} />);
                }
            }
        }
        else {
            scrapedDataForm = [];
        }
    }

    public render() {
        let messageList;
        let parsedTextTable =[];
        let scrapedDataForm = [];
        if (this.props.isLoading) {
            messageList = '<p>Loading...</p>';
        }
        else {
            messageList = <MessageList messages={this.props.messages} onDoubleClickEvent={this.setSelectedMessage} />
            this.buildParsedTextTable(parsedTextTable,scrapedDataForm);
        }

        return <div>
            <h1>List of Messages</h1>
            <p>This component demonstrates getting data from Mock API</p>
            {messageList}
            {parsedTextTable}
            {scrapedDataForm.length > 0 ? <h3>Scraped Data</h3> : []}
            {scrapedDataForm}
        </div>;
    }

    setSelectedMessage(message: IMessagesState.IMessage) {
        this.setState({ selectedMessage: Object.assign({}, message) });

    }

    getScrapedData(message: IMessagesState.IMessage) {
        this.props.getScrapedData(message);
    }

    updateScrapedData(event): void {
        const field = event.target.name;
        let selectedMessage: IMessagesState.IMessage = this.state.selectedMessage;
        if (ScrapedDataFields[field] == CheckboxInput) {
            selectedMessage.scrapedData[field] = event.target.checked;
        }
        else if (ScrapedDataFields[field] == TextInput) {
            selectedMessage.scrapedData[field] = event.target.value;
        }

        this.setState({ selectedMessage: selectedMessage });
    }
}

export default connect(
    (state: ApplicationState) => state.messages, // Selects which state properties are merged into the component's props
    IMessagesState.actionCreators                 // Selects which action creators are merged into the component's props
)(MessagePage);
