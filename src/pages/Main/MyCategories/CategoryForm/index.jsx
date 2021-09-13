import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { formActions } from "../../../../redux/actions";
import { Form } from "../../../../components";
import { Input, Select, Textarea } from "../../../../components/Fields";
import { handleAddCategory, handleEditCategory } from "../../../../utils/helpers/categories";
import { setOverlayHidden } from "../../../../utils/helpers/form";

function CategoryForm({ selectedItems, categories }) {
    const dispatch = useDispatch();

    const overlayHidden = useSelector(({ form }) => {
        return form.overlayHidden;
    });
    const currenctCategoryInfo = useSelector(({ form }) => {
        return form.category;
    });
    const type = useSelector(({ form }) => {
        return form.type;
    });
    const selectedId = Object.keys(selectedItems).filter((item) => selectedItems[item])[0];
    const selectedCategory = categories.filter((item) => item._id === parseInt(selectedId))[0];

    useEffect(() => {
        if (type === "edit") {
            if (selectedCategory) {
                dispatch(formActions.setTitleCategory(selectedCategory.title));
                dispatch(formActions.setExampleWordInCategory(selectedCategory.example));
            }
        }
    }, [type, selectedItems, dispatch, selectedCategory]);

    return (
        <Form
            overlayHidden={overlayHidden}
            setOverlayHidden={() => {
                setOverlayHidden(dispatch);
            }}
            handleCreate={() => {
                handleAddCategory(dispatch, currenctCategoryInfo);
            }}
            handleEdit={() => {
                handleEditCategory(dispatch, currenctCategoryInfo, selectedId);
            }}
            type={type}
        >
            <Input
                className="eng-form__item"
                lable="Название"
                inputValue={currenctCategoryInfo.title}
                handleChange={(e) => {
                    dispatch(formActions.setTitleCategory(e.target.value));
                }}
            />
            <Textarea
                className="eng-form__item"
                lable="Примеры"
                textareaValue={currenctCategoryInfo.example}
                handleChange={(e) => {
                    dispatch(formActions.setExampleWordInCategory(e.target.value));
                }}
            />
        </Form>
    );
}

export default CategoryForm;
