import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { formActions } from "../../../../redux/actions";
import { Form } from "../../../../components";
import { Input, Select, Textarea } from "../../../../components/Fields";
import { handleAddWord, handleEditWord } from "../../../../utils/helpers/words";
import { setOverlayHidden } from "../../../../utils/helpers/form";

function WordForm({ selectedItems, words }) {
    const dispatch = useDispatch();

    const overlayHidden = useSelector(({ form }) => {
        return form.overlayHidden;
    });
    const currenctWordInfo = useSelector(({ form }) => {
        return form.word;
    });
    const type = useSelector(({ form }) => {
        return form.type;
    });
    const selectedId = Object.keys(selectedItems).filter((item) => selectedItems[item])[0];
    const selectedWord = words.filter((item) => item._id === parseInt(selectedId))[0];

    useEffect(() => {
        if (type === "edit") {
            if (selectedWord) {
                dispatch(formActions.setRuWord(selectedWord.ru));
                dispatch(formActions.setEngWord(selectedWord.eng));
                dispatch(formActions.setCategoryWord(selectedWord.category));
                dispatch(formActions.setStatusWord(selectedWord.status));
                dispatch(formActions.setExamplesWord(selectedWord.examples));
            }
        }
    }, [type, selectedItems, dispatch, selectedWord]);

    return (
        <Form
            overlayHidden={overlayHidden}
            setOverlayHidden={() => {
                setOverlayHidden(dispatch);
            }}
            handleCreate={() => {
                handleAddWord(dispatch, currenctWordInfo);
            }}
            handleEdit={() => {
                handleEditWord(dispatch, currenctWordInfo, selectedId);
            }}
            type={type}
        >
            <Input
                className="eng-form__item"
                lable="Слово на русском:"
                inputValue={currenctWordInfo.ru}
                handleChange={(e) => {
                    dispatch(formActions.setRuWord(e.target.value));
                }}
            />
            <Input
                className="eng-form__item"
                lable="Слово на английском:"
                inputValue={currenctWordInfo.eng}
                handleChange={(e) => {
                    dispatch(formActions.setEngWord(e.target.value));
                }}
            />
            <Select
                className="eng-form__item"
                lable="Категория"
                selectValue={currenctWordInfo.category}
                items={["Прилагательное", "Дни недели"]}
                handleChange={(e) => {
                    dispatch(formActions.setCategoryWord(e.target.value));
                }}
            />
            <Select
                className="eng-form__item"
                lable="Статус"
                selectValue={currenctWordInfo.status}
                items={["Новое", "Выучено"]}
                handleChange={(e) => {
                    dispatch(formActions.setStatusWord(e.target.value));
                }}
            />
            <Textarea
                className="eng-form__item"
                lable="Примеры"
                textareaValue={currenctWordInfo.examples}
                handleChange={(e) => {
                    dispatch(formActions.setExamplesWord(e.target.value));
                }}
            />
        </Form>
    );
}

export default WordForm;
