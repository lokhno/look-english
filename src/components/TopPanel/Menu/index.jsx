import React, { useState } from "react";

import useOnclickOutside from "react-cool-onclickoutside";
import classnames from "classnames";

import Opener from './Opener'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

import './Menu.scss'

function Menu({ className }) {
    const [menuVisibilityStatus, setMenuVisibilityStatus] = useState(false);

    const ref = useOnclickOutside(() => {
        setMenuVisibilityStatus(false);
    });

    const toggleMenuVisibility = () => {
        setMenuVisibilityStatus(!menuVisibilityStatus);
    };

    return (
        <div ref={ref} className={classnames(`menu ${className}`, { menu_open: menuVisibilityStatus })}>
            <Opener userName="Kolya" handleMenuVisibility={toggleMenuVisibility}/>
            <Dropdown>
                <DropdownItem>Редактировать профиль</DropdownItem>
                <DropdownItem>Выйти</DropdownItem>
            </Dropdown>
        </div>
    );
}

export default Menu;
