import React from "react";
import classnames from "classnames";

import "./Button.scss";

function Button({ children, className, handleClick, name, blocked }) {
    const onClick = () => {
        if (!blocked) {
            handleClick();
        }
    };
    return (
        <div onClick={onClick} className={classnames({ button_blocked: blocked }, `${className} button`)}>
            <div className="button__title">{name}</div>
            <div className="button__icon">{children}</div>
        </div>
    );
}

export default Button;
