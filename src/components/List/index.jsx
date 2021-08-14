import React from "react";

import './List.scss'

function List({ children, className }) {
    return <ul className={`list ${className}`}>{children.map((item) => item)}</ul>;
}

export default List;
