import React from "react";

import { useDispatch } from "react-redux";

import { Button } from "../";
import { isBlocked, openForm } from "../../utils/helpers/form";

import "./ControlMenu.scss";

function ControlMenu({ className, selectedItems, handleDelete, type }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className={`control-menu ${className}`}>
                <Button
                    className="control-menu__button"
                    name="Добавить"
                    handleClick={() => {
                        openForm(dispatch, "add");
                    }}
                >
                    <i className="fas fa-plus"></i>
                </Button>
                <Button
                    className="control-menu__button"
                    name="Редактировать"
                    blocked={isBlocked(selectedItems, "edit")}
                    handleClick={() => {
                        openForm(dispatch, "edit");
                    }}
                >
                    <i className="far fa-edit"></i>
                </Button>
                <Button
                    className="control-menu__button"
                    name="Удалить"
                    blocked={isBlocked(selectedItems, "delete")}
                    handleClick={() => {
                        handleDelete(dispatch, selectedItems);
                    }}
                >
                    <i className="far fa-trash-alt"></i>
                </Button>

                {type !== "category" ? (
                    <>
                        <Button className="control-menu__button" name="Перемешать">
                            <i className="fas fa-recycle"></i>
                        </Button>
                        <Button className="control-menu__button" name="Учить">
                            <i className="fas fa-graduation-cap"></i>
                        </Button>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ControlMenu;
