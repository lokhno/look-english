import React, { useState } from "react";
import classnames from "classnames";

import "./ListItem.scss";

function ListItem({ className, children, AdditionalInformation }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleOpen = (e) => {
        console.log(e.target);
        window.a = e.target;
        setIsOpen(!isOpen);
    };
    const handleCheck = (e) => {
        if (
            !(
                e.target.className === "fas fa-chevron-down btn-icon" ||
                e.target.className === "fas fa-chevron-up btn-icon" ||
                e.target.className === "list-item__visibility-toggler-button"
            )
        ) {
            setIsChecked(!isChecked);
        }
    };

    return (
        <div
            onClick={handleCheck}
            className={classnames("list-item", { "list-item_open": isOpen, "list-item_checked": isChecked })}
        >
            <div className="list-item__main-info">
                <div className="list-item__container">{children}</div>
                <div className="list-item__visibility-toggler">
                    <div className="list-item__visibility-toggler-button" onClick={handleOpen}>
                        <i className="fas fa-chevron-down btn-icon"></i>
                        <i className="fas fa-chevron-up btn-icon"></i>
                    </div>
                </div>
            </div>
            <div className="list-item__additional-info">
                <div>Статус: Выучено</div>
                <div>Категория: Новые слова</div>
            </div>
        </div>
    );
}

export default ListItem;
