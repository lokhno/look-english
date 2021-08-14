import React from "react";

import { Button } from "../";

import "./ControlMenu.scss";

function ControlMenu() {
    return (
        <div className="control-menu">
            <Button className="control-menu__button" name="Добавить">
                <i className="fas fa-plus"></i>
            </Button>
            <Button className="control-menu__button" name="Редактировать">
                <i className="far fa-edit"></i>
            </Button>
            <Button className="control-menu__button" name="Удалить">
                <i className="far fa-trash-alt"></i>
            </Button>
            <Button className="control-menu__button" name="Перемешать">
                <i className="fas fa-recycle"></i>
            </Button>
        </div>
    );
}

export default ControlMenu;
