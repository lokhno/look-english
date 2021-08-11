import React from "react";

import { Button } from "../";

import "./ControlMenu.scss";

function ControlMenu() {
    return (
        <div className="control-menu">
            <Button className="control-menu__button" name="Добавить">
                <i class="fas fa-plus"></i>
            </Button>
            <Button className="control-menu__button" name="Редактировать">
                <i class="far fa-edit"></i>
            </Button>
            <Button className="control-menu__button" name="Удалить">
                <i class="far fa-trash-alt"></i>
            </Button>
            <Button className="control-menu__button" name="Перемешать">
                <i class="fas fa-recycle"></i>
            </Button>
        </div>
    );
}

export default ControlMenu;
