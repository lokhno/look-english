const actions = {
    addWord: (item) => ({
        type: "ADD_WORD",
        payload: item,
    }),
    deleteWords: (ids) => ({
        type: "DELETE_WORDS",
        payload: ids,
    }),
    editWord: (item, id) => ({
        type: "EDIT_WORD",
        payload: { item, id },
    }),
    toggleSelected: (id) => ({
        type: "TOGGLE_SELECTED",
        payload: id,
    }),
};

export default actions;
