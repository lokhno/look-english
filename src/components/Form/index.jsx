import React from "react";
import classnames from "classnames";

import { Button } from "../";

import "./Form.scss";

function Form({ overlayHidden, setOverlayHidden, children, handleCreate, handleEdit, type }) {
    return (
        <div>
            <div
                className={classnames("background", { background_hide: overlayHidden })}
                onClick={() => setOverlayHidden(!overlayHidden)}
            ></div>
            {!overlayHidden && (
                <div className="eng-form">
                    {children.map((item) => item)}

                    <div className="eng-form__controller">
                        <Button
                            className="eng-form__button"
                            name="Сохранить"
                            handleClick={() => {
                                if (type === "edit") {
                                    handleEdit();
                                } else {
                                    handleCreate();
                                }
                                setOverlayHidden();
                            }}
                        >
                            Сохранить
                        </Button>
                        <Button
                            name="Отмена"
                            handleClick={() => {
                                setOverlayHidden();
                            }}
                        >
                            Отмена
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Form;
