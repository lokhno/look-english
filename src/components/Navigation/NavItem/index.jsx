import React from "react";

import classnames from "classnames";

function NavItem({ children, isActive, toggleActive }) {
    return (
        <li onClick={toggleActive} className={classnames("navigation__item", { navigation__item_active: isActive })}>
            {children}
        </li>
    );
}

export default NavItem;
