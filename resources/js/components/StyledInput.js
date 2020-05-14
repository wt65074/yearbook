import React from 'react';

function StyledInput(props) {
    return (
        <div className={props.className}>
            <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} type={props.type ?? 'text'}
                   className="shadow-input bg-white rounded p-4 w-full"/>
            {props.error && <p className="text-red text-sm mt-2 px-2">{props.error}</p>}
        </div>
    );
}

export default StyledInput
