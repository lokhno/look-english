import React, { useState } from "react";

import classnames from "classnames";

import NavItem from "./NavItem";

import "./Navigation.scss";

const NAVIGATION_MENU_ITEMS = [
    { name: "Мои слова", id: 1 },
    { name: "Мои категории", id: 2 },
    { name: "Учить слова", id: 3 },
    { name: "Подборки слова", id: 4 },
];

function Navigation() {
    const [navMenuVisibilityStatus, setNavMenuVisibilityStatus] = useState(false);
    const [activeNavMenuItem, setActiveNavMenuItem] = useState(1);
    const toggleNavMenuVisibility = () => {
        setNavMenuVisibilityStatus(!navMenuVisibilityStatus);
    };

    return (
        <ul className={classnames("navigation", { navigation_open: navMenuVisibilityStatus })}>
            <div className="navigation__opener" onClick={toggleNavMenuVisibility}>
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
            </div>
            {NAVIGATION_MENU_ITEMS.map((item) => (
                <NavItem
                    toggleActive={() => {
                        console.log(item.id)
                        setActiveNavMenuItem(item.id);
                    }}
                    key={item.id}
                    isActive={activeNavMenuItem === item.id}
                >
                    {item.name}
                </NavItem>
            ))}
        </ul>
    );
}

export default Navigation;
