import * as React from 'react';
import { IMessage } from '../../store/Messages'

export interface IParsedLine {
    lineNum: number,
    lineText: string,
}

const MessageParsedText = ({message, onDoubleClick}) => {
    var messageVm: IMessage = message;
    var parsedLines: IParsedLine[] = [];
    var lineNo = 1;
    for (let line of messageVm.parsedText.split('\n')) {
        let lineObj: IParsedLine = { lineNum: lineNo, lineText: line }
        parsedLines.push(lineObj);
        lineNo++;
    }
    return (
        <div>
            <h3>Parsed Text of message <strong>{messageVm.subject}</strong></h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Line Number</th>
                        <th>Line Text</th>
                    </tr>
                </thead>
                <tbody>
                    {parsedLines.map((line) =>
                        <tr className={line.lineNum == 2 ? 'bg-danger' : ''} key={line.lineNum} onDoubleClick={() => onDoubleClick(message)}>
                            <td>{line.lineNum}</td>
                            <td>{line.lineText}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>);
}

export default MessageParsedText;