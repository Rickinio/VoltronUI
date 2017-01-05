import * as React from 'react';

export interface ITextInput {
    name: string,
    label: string,
    onChange(event: any): void,
    placeholder: string,
    value: string,
    error: string
}

const TextInput = (params:ITextInput) => {
    let wrapperClass = 'form-group';
    if (params.error && params.error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={params.name}>{params.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={params.name}
                    className="form-control"
                    placeholder={params.placeholder}
                    value={params.value}
                    onChange={params.onChange} />
                {params.error && <div className="alert alert-danger">{params.error}</div>}
            </div>
        </div>
    );
};


export default TextInput;

