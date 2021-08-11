import React from "react";

import { Button } from "../";

import "./ControlMenu.scss";

function ControlMenu() {
    return (
        <div className="control-menu">
            <Button className="control-menu__button">Добавить</Button>
            <Button className="control-menu__button">Редактировать</Button>
            <Button className="control-menu__button">Удалить</Button>
            <Button className="control-menu__button">Перемешать</Button>
        </div>
    );
}

export default ControlMenu;
