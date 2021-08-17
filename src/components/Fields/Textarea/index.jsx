import React from "react";

import './Textarea.scss'

function Textarea({ lable, className }) {
    return (
        <div className={`textarea ${className}`}>
            <div className="textarea__lable">{lable}</div>
            <textarea />
        </div>
    );
}

export default Textarea;
