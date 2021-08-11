import React from "react";

import "./Button.scss";

function Button({ children, className, handleClick, name }) {
    return (
        <div onClick={handleClick} className={`button ${className}`}>
            <div className="button__title">{name}</div>
            <div className="button__icon">{children}</div>
        </div>
    );
}

export default Button;
