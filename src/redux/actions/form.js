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

const actions = {
    toggleOverlayView: () => ({
        type: TOOGLE_OVERLAY_VIEW,
    }),
    setRuWord: (ru) => ({
        type: SET_RU_WORD,
        payload: ru,
    }),
    setEngWord: (eng) => ({
        type: SET_ENG_WORD,
        payload: eng,
    }),
    setCategoryWord: (category) => ({
        type: SET_CATEGORY_WORD,
        payload: category,
    }),
    setStatusWord: (status) => ({
        type: SET_STATUS_WORD,
        payload: status,
    }),
    setExamplesWord: (examples) => ({
        type: SET_EXAMPLES_WORD,
        payload: examples,
    }),
    setType: (type) => ({
        type: SET_TYPE,
        payload: type,
    }),
    setTitleCategory: (title) => ({
        type: SET_TITLE_CATEGORY,
        payload: title,
    }),
    setExampleWordInCategory: (example) => ({
        type: SET_EXMAPLE_WORD_IN_CATEGORY,
        payload: example,
    }),
};

export default actions;