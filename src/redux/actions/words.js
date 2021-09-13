import { wordActionsType } from "../types.js";

const { ADD_WORD, DELETE_WORDS, EDIT_WORD, TOGGLE_SELECTED_WORD } = wordActionsType;

const actions = {
    addWord: (item) => ({
        type: ADD_WORD,
        payload: item,
    }),
    deleteWords: (ids) => ({
        type: DELETE_WORDS,
        payload: ids,
    }),
    editWord: (item, id) => ({
        type: EDIT_WORD,
        payload: { item, id },
    }),
    toggleSelectedWord: (id) => ({
        type: TOGGLE_SELECTED_WORD,
        payload: id,
    }),
};

export default actions;