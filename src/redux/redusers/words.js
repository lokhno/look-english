const initialState = {
    items: [
        { eng: "good", ru: "хорошо", id: 1 },
        { eng: "small", ru: "маленький", id: 2 },
        { eng: "Friday", ru: "пятница", id: 3 },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
