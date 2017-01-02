import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ThunkAction, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import MessageApi from '../api/mockMessageApi';

export interface MessagesState {
    isLoading: boolean,
    messages: Message[]
}

export interface Message {
    id: number,
    emailDate: string,
    fromAddress: string,
    subject: string,
}

interface RequestMessagesAction {
    type: 'REQUEST_MESSAGES',
}

interface ReceiveMessagesAction {
    type: 'RECEIVE_MESSAGES',
    messages: Message[]
}

type KnownAction = RequestMessagesAction | ReceiveMessagesAction;

export const actionCreators = {
    requestMessages: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        if (getState().messages.messages.length == 0) {
            let fetchTask = MessageApi.getNextTenMessages()
                .then(data => {
                    dispatch({ type: 'RECEIVE_MESSAGES', messages: data as Message[] });
                });

            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_MESSAGES' });
        }
    }
};

const unloadedState: MessagesState = { messages: [], isLoading: false };

export const reducer: Reducer<MessagesState> = (state: MessagesState, action: KnownAction) => {
    switch (action.type) {
        case 'REQUEST_MESSAGES':
            return {
                messages: state.messages,
                isLoading: true
            };
        case 'RECEIVE_MESSAGES':
            return {
                messages: action.messages,
                isLoading: false
            };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};