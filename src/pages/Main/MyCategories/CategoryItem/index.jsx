import React from "react";

import { ListItem } from "../../../../components";
import CategoryContent from "../CategoryContent";
import CategoryAdditionalInformation from "../CategoryAdditionalInformation";

function CategoryItem({ category }) {
    return (
        <ListItem>
            <CategoryContent title={category.title}  />
            <CategoryAdditionalInformation example={category.example} />
        </ListItem>
    );
}

export default CategoryItem;
