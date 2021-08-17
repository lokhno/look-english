import React from "react";

import './Input.scss'

function Input({ lable, inputValue, handleChange, className }) {
    return (
        <div className={`input ${className}`}>
            <div className="input__lable">{lable}</div>
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
}

export default Input;
