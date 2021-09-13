import { formActions } from "../../redux/actions";

export const isBlocked = (selectedItems, type) => {
    if (type === "edit") {
        return !(Object.keys(selectedItems).filter((item) => selectedItems[item]).length === 1);
    }
    if (type === "delete") {
        return !(Object.keys(selectedItems).filter((item) => selectedItems[item]).length !== 0);
    }
};

export const setOverlayHidden = (dispatch) => {
    dispatch(formActions.toggleOverlayView());
    dispatch(formActions.setRuWord(""));
    dispatch(formActions.setEngWord(""));
    dispatch(formActions.setCategoryWord(""));
    dispatch(formActions.setStatusWord(""));
    dispatch(formActions.setExamplesWord(""));
    dispatch(formActions.setTitleCategory(""));
    dispatch(formActions.setExampleWordInCategory(""));
};

// export const toggleOverlayView = (dispatch) => {
//     dispatch(formActions.toggleOverlayView());
// };

export const openForm = (dispatch, type) => {
    dispatch(formActions.toggleOverlayView());
    dispatch(formActions.setType(type));
};