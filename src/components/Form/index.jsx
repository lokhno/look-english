import React, { useState } from "react";
import classnames from "classnames";

import { Input, Select, Textarea } from "../Fields";
import { Button } from "../";

import "./Form.scss";

function Form({ overlayHidden, setOverlayHidden }) {
    const [ruWord, setRuWord] = useState("");

    const handleChange = (e) => {
        setRuWord(e.target.value);
    };
    return (
        <div>
            <div
                className={classnames("background", { background_hide: overlayHidden })}
                onClick={() => setOverlayHidden(!overlayHidden)}
            ></div>
            {!overlayHidden && (
                <div className="eng-form">
                    <Input className="eng-form__item" lable="Слово на русском:" inputValue={ruWord} handleChange={handleChange} />
                    <Input className="eng-form__item" lable="Слово на английском:" />
                    <Select className="eng-form__item" lable="Категория" items={["Прилагательные", "Дни недели"]} />
                    <Select className="eng-form__item" lable="Статус" items={["Новое", "Выучено"]} />
                    <Textarea className="eng-form__item" lable="Примеры" />
                    <div className="eng-form__controller">
                        <Button className="eng-form__button" name="Сохранить">
                            Сохранить
                        </Button>
                        <Button name="Отмена">Отмена</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Form;
