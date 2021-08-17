import React from "react";

function Select({ lable, items, className }) {
    return (
        <div className={`select ${className}`}>
            <div className="select__lable">{lable}</div>
            <select>
                <option></option>
                {items.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>;
                })}
            </select>
        </div>
    );
}

export default Select;
