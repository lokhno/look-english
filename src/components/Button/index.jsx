import React from "react";

import "./Button.scss";

function Button({ children, className, handleClick }) {
    return (
        <div onClick={handleClick} className={`button ${className}`}>
            {children}
        </div>
    );
}

export default Button;
