import React, { useState } from "react";
import classnames from "classnames";

import { Button, Form } from "../";

import "./ControlMenu.scss";

function ControlMenu({ className }) {
    const [overlayHidden, setOverlayHidden] = useState(false);
    return (
        <div>
            <Form overlayHidden={overlayHidden} setOverlayHidden={setOverlayHidden} />

            <div className={`control-menu ${className}`}>
                <Button className="control-menu__button" name="Добавить" handleClick={() => setOverlayHidden(!overlayHidden)}>
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
                <Button className="control-menu__button" name="Учить">
                    <i class="fas fa-graduation-cap"></i>
                </Button>
            </div>
        </div>
    );
}

export default ControlMenu;
