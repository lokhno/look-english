import React from "react";

function Dropdown({ children }) {
    return <div className="menu__dropdown">{children.map((item) => item)}</div>;
}

export default Dropdown;
