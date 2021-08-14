import React from "react";

import './Title.scss'

function Title({ className }) {
    return <div className={`title ${className}`}>
        <div className="title__full">Looks English</div>
        <div className="title__small">LE</div>
    </div>;
}

export default Title;
