import * as React from 'react';
import { IMessage } from '../../store/Messages'



const MessageList = ({messages, onDoubleClickEvent}) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email Date</th>
                    <th>From Address</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(message =>
                    <tr key={message.id} onDoubleClick={() => onDoubleClickEvent(message)}>
                        <td>{message.id}</td>
                        <td>{message.emailDate}</td>
                        <td>{message.fromAddress}</td>
                        <td>{message.subject}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default MessageList;