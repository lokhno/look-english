import { categoryActionsType } from "../types";

const { ADD_CATEGORY, DELETE_CATEGORIES, EDIT_CATEGORY, TOGGLE_SELECTED_CATEGORIES } = categoryActionsType;

const actions = {
    addCategory: (item) => ({
        type: ADD_CATEGORY,
        payload: item,
    }),
    deleteCategories: (ids) => ({
        type: DELETE_CATEGORIES,
        payload: ids,
    }),
    editCategory: (item, id) => ({
        type: EDIT_CATEGORY,
        payload: { item, id },
    }),
    toggleSelectedCategory: (id) => ({
        type: TOGGLE_SELECTED_CATEGORIES,
        payload: id,
    }),
};

export default actions;