import { fetch } from 'domain-task';
import * as MessageState from '../store/Messages';

const ScrapedData = {
    vessel:"Theofilos",
    loading:"Rastanura",
    isPartial:true
}

class MessageApi {

    static getNextTenMessages():Promise<MessageState.IMessage[]> {
        return new Promise((resolve, reject) => {
            fetch('/api/MockData/GetMessages')
            .then(response=> response.json() as Promise<MessageState.IMessage[]>)
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

    static getScrapedData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(ScrapedData);
            },1000)
        });
    }

}

export default MessageApi;