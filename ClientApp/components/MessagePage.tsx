import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as MessagesState from '../store/Messages';

// At runtime, Redux will merge together...
type MessagesProps = MessagesState.MessagesState & typeof MessagesState.actionCreators;

class MessagePage extends React.Component<MessagesProps, void> {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestMessages();
    }

    componentWillReceiveProps() {
        this.props.requestMessages();
    }

    public render() {
        return <div>
            <h1>List of Messages</h1>
            <p>This component demonstrates getting data from Mock API</p>
            {this.props.isLoading ? <p>Loading...</p> : []}
            {!this.props.isLoading ? this.renderForecastsTable(): []}
        </div>;
    }

    private renderForecastsTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email Date</th>
                    <th>From Address</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
            {this.props.messages.map(message =>
                <tr key={ message.Id }>
                    <td>{ message.Id }</td>
                    <td>{ message.EmailDate }</td>
                    <td>{ message.FromAddress }</td>
                    <td>{ message.Subject }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

export default connect(
    (state: ApplicationState) => state.messages, // Selects which state properties are merged into the component's props
    MessagesState.actionCreators                 // Selects which action creators are merged into the component's props
)(MessagePage);
