const initialState = {
    overlayHidden: true,
    type: "",
    word: { ru: "", eng: "", category: "", status: "", examples: "" },
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case "TOOGLE_OVERLAY_VIEW":
            return {
                ...state,
                overlayHidden: !state.overlayHidden,
            };
        case "SET_RU_WORD": {
            return {
                ...state,
                word: { ...state.word, ru: action.payload },
            };
        }
        case "SET_ENG_WORD": {
            return {
                ...state,
                word: { ...state.word, eng: action.payload },
            };
        }
        case "SET_CATEGORY_WORD": {
            return {
                ...state,
                word: { ...state.word, category: action.payload },
            };
        }
        case "SET_STATUS_WORD": {
            return {
                ...state,
                word: { ...state.word, status: action.payload },
            };
        }
        case "SET_EXAMPLES_WORD": {
            return {
                ...state,
                word: { ...state.word, examples: action.payload },
            };
        }
        case "SET_TYPE": {
            return {
                ...state,
                type: action.payload,
            };
        }

        default:
            return state;
    }
};
export default reduser;
