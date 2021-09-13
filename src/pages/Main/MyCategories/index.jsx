import React from "react";

import { useSelector } from "react-redux";

import { List, ControlMenu } from "../../../components";
import CategoryItem from "./CategoryItem";
import CategoryForm from "./CategoryForm";
import { handleDeleteCategory } from "../../../utils/helpers/categories";

import "./MyCategories.scss";

function MyCategories() {
    const categories = useSelector(({ categories }) => {
        return categories.items;
    });
    const selectedItems = useSelector(({ categories }) => {
        return categories.selectedItems;
    });

    return (
        <div>
            <ControlMenu
                className="my-categories__control-menu"
                selectedItems={selectedItems}
                handleDelete={handleDeleteCategory}
                type="category"
            />
            <CategoryForm selectedItems={selectedItems} categories={categories} />
            <div className="my-categories">
                <List className="my-categories__list">
                    {categories.map((item) => (
                        <CategoryItem key={item._id} category={item} />
                    ))}
                </List>
            </div>
        </div>
    );
}

export default MyCategories;
