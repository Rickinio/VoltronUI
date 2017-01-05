import * as React from 'react';

export interface ICheckboxInput {
    name: string,
    label: string,
    onChange(event: any): void,
    value: boolean,
    error: string
}

const CheckboxInput = (params:ICheckboxInput) => {
    let wrapperClass = 'form-group';
    if (params.error && params.error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={params.name}>{params.label}</label>
            <div className="field">
                <input
                    type="checkbox"
                    name={params.name}
                    className=""
                    checked={params.value}
                    onChange={params.onChange} />
                {params.error && <div className="alert alert-danger">{params.error}</div>}
            </div>
        </div>
    );
};


export default CheckboxInput;

