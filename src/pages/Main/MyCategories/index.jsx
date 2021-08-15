import React from 'react'

import { useSelector } from "react-redux";

import { List, ControlMenu } from "../../../components";
import CategoryItem from "./CategoryItem";

import './MyCategories.scss'

function MyCategories() {
    const categories = useSelector(({ categories }) => {
        return categories.items;
    });
    return (
        <div>
        <ControlMenu className="my-categories__control-menu"/>
        <div className="my-categories">
            <List className="my-categories__list">
                {categories.map((item) => (
                    <CategoryItem key={item._id} category={item} />
                ))}
            </List>
        </div>
    </div>
    )
}

export default MyCategories
