import React from "react";

import { useDispatch } from "react-redux";

import { Button } from "../";
import { formActions } from "../../redux/actions";

import "./ControlMenu.scss";

function ControlMenu({ className, selectedItems, handleDelete }) {
    const dispatch = useDispatch();

    const setOverlayHidden = () => {
        dispatch(formActions.toggleOverlayView());
    };

    return (
        <div>
            <div className={`control-menu ${className}`}>
                <Button
                    className="control-menu__button"
                    name="Добавить"
                    handleClick={() => {
                        setOverlayHidden();
                        dispatch(formActions.setType("add"));
                    }}
                >
                    <i className="fas fa-plus"></i>
                </Button>
                <Button
                    className="control-menu__button"
                    name="Редактировать"
                    blocked={!(Object.keys(selectedItems).filter((item) => selectedItems[item]).length === 1)}
                    handleClick={() => {
                        setOverlayHidden();
                        dispatch(formActions.setType("edit"));
                    }}
                >
                    <i className="far fa-edit"></i>
                </Button>
                <Button
                    className="control-menu__button"
                    name="Удалить"
                    blocked={!(Object.keys(selectedItems).filter((item) => selectedItems[item]).length !== 0)}
                    handleClick={() => {
                        handleDelete();
                    }}
                >
                    <i className="far fa-trash-alt"></i>
                </Button>
                <Button className="control-menu__button" name="Перемешать">
                    <i className="fas fa-recycle"></i>
                </Button>
                <Button className="control-menu__button" name="Учить">
                    <i className="fas fa-graduation-cap"></i>
                </Button>
            </div>
        </div>
    );
}

export default ControlMenu;
