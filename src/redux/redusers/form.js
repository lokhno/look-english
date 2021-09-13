import { formActionsType } from "../types";

const {
    TOOGLE_OVERLAY_VIEW,
    SET_RU_WORD,
    SET_ENG_WORD,
    SET_CATEGORY_WORD,
    SET_STATUS_WORD,
    SET_EXAMPLES_WORD,
    SET_TYPE,
    SET_TITLE_CATEGORY,
    SET_EXMAPLE_WORD_IN_CATEGORY,
} = formActionsType;

const initialState = {
    overlayHidden: true,
    type: "",
    word: { ru: "", eng: "", category: "", status: "", examples: "" },
    category: { title: "", example: "" },
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_OVERLAY_VIEW:
            return {
                ...state,
                overlayHidden: !state.overlayHidden,
            };
        case SET_RU_WORD:
            {
                return {
                    ...state,
                    word: {...state.word, ru: action.payload },
                };
            }
        case SET_ENG_WORD:
            {
                return {
                    ...state,
                    word: {...state.word, eng: action.payload },
                };
            }
        case SET_CATEGORY_WORD:
            {
                return {
                    ...state,
                    word: {...state.word, category: action.payload },
                };
            }
        case SET_STATUS_WORD:
            {
                return {
                    ...state,
                    word: {...state.word, status: action.payload },
                };
            }
        case SET_EXAMPLES_WORD:
            {
                return {
                    ...state,
                    word: {...state.word, examples: action.payload },
                };
            }
        case SET_TYPE:
            {
                return {
                    ...state,
                    type: action.payload,
                };
            }
        case SET_TITLE_CATEGORY:
            {
                return {
                    ...state,
                    category: {...state.category, title: action.payload },
                };
            }
        case SET_EXMAPLE_WORD_IN_CATEGORY:
            {
                return {
                    ...state,
                    category: {...state.category, example: action.payload },
                };
            }

        default:
            return state;
    }
};
export default reduser;