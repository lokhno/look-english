import React from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";

function NavItem({ path, children, isActive, toggleActive }) {
    return (
        <Link to={path}>
            <li onClick={toggleActive} className={classnames("navigation__item", { navigation__item_active: isActive })}>
                {children}
            </li>
        </Link>
    );
}

export default NavItem;
