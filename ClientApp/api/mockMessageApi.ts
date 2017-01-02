import * as MessageState from '../store/Messages';

const messages = [
    {
        Id: 1,
        EmailDate: "30/12/2016",
        FromAddress: "howerob.com",
        Subject: "Vlcc Report"
    },
    {
        Id: 2,
        EmailDate: "31/12/2016",
        FromAddress: "icap.com",
        Subject: "Vlcc Evening Report"
    }
]

class MessageApi {
    static getNextTenMessages() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], messages));
            }, 2000);
        });
    }
}

export default MessageApi;