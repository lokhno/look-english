import React from "react";

import "./Textarea.scss";

function Textarea({ lable, className, textareaValue, handleChange }) {
    return (
        <div className={`textarea ${className}`}>
            <div className="textarea__lable">{lable}</div>
            <textarea value={textareaValue} onChange={handleChange} />
        </div>
    );
}

export default Textarea;
