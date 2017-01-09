import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ThunkAction, ActionCreator } from 'redux';
import { AppAction } from './';
import MessageApi from '../api/mockMessageApi';

export interface IMessagePageState {
    isLoading: boolean,
    messages: IMessage[],
    selectedMessage: IMessage
}

export interface IMessage {
    id: number,
    emailDate: string,
    fromAddress: string,
    subject: string,
    parsedText: string,
    isSelected: boolean,
    scrapedData: IScrapedData
}

export interface IScrapedData {
    vessel: string,
    loading: string,
    isPartial: boolean
}

interface RequestMessagesAction {
    type: 'REQUEST_MESSAGES',
}

interface ReceiveMessagesAction {
    type: 'RECEIVE_MESSAGES',
    messages: IMessage[]
    selectedMessage: IMessage
}

interface GetScrapedDataAction {
    type: 'GET_SCRAPED_DATA',
    messages: IMessage[],
    selectedMessage: IMessage
}

type KnownAction = RequestMessagesAction | ReceiveMessagesAction | GetScrapedDataAction;

export const actionCreators = {
    requestMessages: (): AppAction<KnownAction> => (dispatch, getState) => {
        if (getState().messages.messages.length == 0) {
            let fetchTask = MessageApi.getNextTenMessages()
                .then(data => {
                    dispatch({ type: 'RECEIVE_MESSAGES', messages: data as IMessage[], selectedMessage: getState().messages.selectedMessage });
                });

            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_MESSAGES' });
        }
    },
    getScrapedData: (message: IMessage): AppAction<KnownAction> => (dispatch, getState) => {
        let scrapedData = MessageApi.getScrapedData()
            .then(data => {
                let msgs: IMessage[] = getState().messages.messages;
                let selectedMessage = msgs.filter((m) => m.id == message.id)[0];
                let selectedMessageIndex = msgs.findIndex(m => m.id == message.id);
                selectedMessage.scrapedData = data as IScrapedData
                msgs.splice(selectedMessageIndex, 1, selectedMessage)
                dispatch({ type: 'GET_SCRAPED_DATA', messages: msgs, selectedMessage: selectedMessage });
            })
    }
};

const unloadedState: IMessagePageState = { messages: [], isLoading: false, selectedMessage: {} as IMessage };

export const reducer: Reducer<IMessagePageState> = (state: IMessagePageState, action: KnownAction) => {
    switch (action.type) {
        case 'REQUEST_MESSAGES':
            return Object.assign({} as IMessagePageState, state, {
                isLoading: true,
            });
        case 'RECEIVE_MESSAGES':
            return Object.assign({} as IMessagePageState, state, {
                isLoading: false,
                messages: action.messages
            });
        case 'GET_SCRAPED_DATA':
            return Object.assign({} as IMessagePageState, state, {
                messages: action.messages,
                isLoading: false,
                selectedMessage: action.selectedMessage
            });
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};
