const initialState = {
    nextID: 4,
    selectedItems: {},
    items: [
        { eng: "good", ru: "хорошо", _id: 1, status: "Выучено", category: "Прилагательное", examples: "I have good day" },
        { eng: "small", ru: "маленький", _id: 2, status: "Новое", category: "Прилагательное", examples: "They have small pensions" },
        { eng: "Friday", ru: "пятница", _id: 3, status: "Выучено", category: "Дни недели", examples: "1 April 1949 was a Friday." },
    ],
};

const excludeItems = (state, selectedWords) => {
    return state.items.filter((item) => {
        let suitable = true;
        selectedWords.forEach((forDelete) => {
            if (item._id === forDelete) {
                suitable = false;
            }
        });
        return suitable;
    });
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WORD":
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        eng: action.payload.eng,
                        ru: action.payload.ru,
                        _id: state.nextID + 1,
                        category: action.payload.category,
                        status: "Новое",
                        examples: action.payload.examples
                    },
                ],
                nextID: state.nextID + 1,
            };
        case "DELETE_WORDS":
            return {
                ...state,
                items: excludeItems(state, action.payload),
            };
        case "EDIT_WORD":
            return {
                ...state,
                items: [
                    ...excludeItems(state, [action.payload.id]),
                    {
                        _id: action.payload.id,
                        category: action.payload.item.category,
                        eng: action.payload.item.eng,
                        ru: action.payload.item.ru,
                        status: action.payload.item.status,
                        examples: action.payload.item.examples
                    },
                ],
            };
        case "TOGGLE_SELECTED":
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
