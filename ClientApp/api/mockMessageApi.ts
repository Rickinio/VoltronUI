import { fetch } from 'domain-task';
import * as MessageState from '../store/Messages';

class MessageApi {

    static getNextTenMessages():Promise<MessageState.Message[]> {
        return new Promise((resolve, reject) => {
            fetch('/api/MockData/GetMessages')
            .then(response=> response.json() as Promise<MessageState.Message[]>)
            .then(data=>resolve(data))
            .catch(error=> reject(error))
        });
    }

    static getParsedText() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`line111111111111111111
                        line222222222222222
                        line33333333333333333
                        `);
            }, 2000)
        });
    }
}

export default MessageApi;