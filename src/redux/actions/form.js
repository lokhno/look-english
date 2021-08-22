const actions = {
    toggleOverlayView: () => ({
        type: "TOOGLE_OVERLAY_VIEW",
    }),
    setRuWord: (ru) => ({
        type: "SET_RU_WORD",
        payload: ru,
    }),
    setEngWord: (eng) => ({
        type: "SET_ENG_WORD",
        payload: eng,
    }),
    setCategoryWord: (category) => ({
        type: "SET_CATEGORY_WORD",
        payload: category,
    }),
    setStatusWord: (status) => ({
        type: "SET_STATUS_WORD",
        payload: status,
    }),
    setExamplesWord: (examples) => ({
        type: "SET_EXAMPLES_WORD",
        payload: examples,
    }),
    setType: (type) => ({
        type: "SET_TYPE",
        payload: type,
    }),
};

export default actions;
