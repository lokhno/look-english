import React from "react";

import './List.scss'

function List({ children, className }) {
    return <div className={`list ${className}`}>{children.map((item) => item)}</div>;
}

export default List;
