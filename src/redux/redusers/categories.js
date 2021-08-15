const initialState = {
    nextID: 3,
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
        case "ADD_CATEGORY":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        title: action.payload.title,
                        example: "Пока примерно в нет :(",
                    },
                ],
                nextID: state.nextID + 1,
            };
        case "DELETE_CATEGORIES":
            return {
                ...state,
                items: excludeItems(state, action.payload),
            };
        case "EDIT_CATEGORY":
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
        default:
            return state;
    }
};

export default reduser;
