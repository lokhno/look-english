const actions = {
    addCategory: (item) => ({
        type: "ADD_CATEGORY",
        payload: item,
    }),
    deleteCategories: ids => ({
        type: "DELETE_CATEGORIES",
        payload: ids
    }),
    editCategory: (item, id) =>  ({
        type: "EDIT_CATEGORY",
        payload: {item, id}
    })
};

export default actions;
