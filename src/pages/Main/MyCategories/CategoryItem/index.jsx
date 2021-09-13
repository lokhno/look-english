import React from "react";

import { useDispatch } from "react-redux";

import { ListItem } from "../../../../components";
import CategoryContent from "../CategoryContent";
import CategoryAdditionalInformation from "../CategoryAdditionalInformation";
import { categoriesActions } from "../../../../redux/actions";

function CategoryItem({ category }) {
    const dispatch = useDispatch();
    const handleSelect = () => {
        dispatch(categoriesActions.toggleSelectedCategory(category._id));
    };
    return (
        <ListItem onSelect={handleSelect}>
            <CategoryContent title={category.title}  />
            <CategoryAdditionalInformation example={category.example} />
        </ListItem>
    );
}

export default CategoryItem;
