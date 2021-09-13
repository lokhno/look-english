import { categoryActionsType } from "../types.js";

const { ADD_CATEGORY, DELETE_CATEGORIES, EDIT_CATEGORY, TOGGLE_SELECTED_CATEGORIES } = categoryActionsType;

const initialState = {
    nextID: 3,
    selectedItems: {},
    items: [
        { title: "Прилагательное", _id: 1, example: "good - хорошо" },
        { title: "Дни недели", _id: 2, example: "Friday - пятница" },
    ],
};

const excludeItems = (state, selectedCategories) => {
    return state.items.filter((item) => {
        let suitable = true;
        selectedCategories.forEach((forDelete) => {
            if (item._id === forDelete) {
                suitable = false;
            }
        });
        return suitable;
    });
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        _id: state.nextID + 1,
                        title: action.payload.title,
                        example: action.payload.example,
                    },
                ],
                nextID: state.nextID + 1,
            };
        case DELETE_CATEGORIES:
            return {
                ...state,
                selectedItems: {},
                items: excludeItems(state, action.payload),
            };
        case EDIT_CATEGORY:
            return {
                ...state,
                items: [
                    ...excludeItems(state, [action.payload.id]),
                    {
                        _id: action.payload.id,
                        title: action.payload.item.title,
                        example: action.payload.item.example,
                    },
                ],
            };
        case TOGGLE_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedItems: {
                    ...state.selectedItems,
                    [action.payload]: !state.selectedItems[action.payload],
                },
            };
        default:
            return state;
    }
};

export default reduser;