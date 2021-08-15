import React, { useState } from "react";
import classnames from "classnames";

import "./ListItem.scss";

function ListItem({ children, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const content = children.filter((item) => item?.type?.name?.toLocaleLowerCase()?.includes("content"));
    const otherInformation = children.filter((item) => !item?.type?.name?.toLocaleLowerCase()?.includes("content"));

    const handleOpen = (e) => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (e) => {
        if (
            !(
                e.target.className === "fas fa-chevron-down btn-icon" ||
                e.target.className === "fas fa-chevron-up btn-icon" ||
                e.target.className === "list-item__visibility-toggler-button"
            )
        ) {
            setIsSelected(!isSelected);
            onSelect && onSelect();
        }
    };

    return (
        <div
            onClick={handleSelect}
            className={classnames("list-item", { "list-item_open": isOpen, "list-item_selected": isSelected })}
        >
            <div className="list-item__main-info">
                <div className="list-item__container">{content}</div>
                <div className="list-item__visibility-toggler">
                    <div className="list-item__visibility-toggler-button" onClick={handleOpen}>
                        <i className="fas fa-chevron-down btn-icon"></i>
                        <i className="fas fa-chevron-up btn-icon"></i>
                    </div>
                </div>
            </div>
            <div className="list-item__additional-info">{otherInformation}</div>
        </div>
    );
}

export default ListItem;
