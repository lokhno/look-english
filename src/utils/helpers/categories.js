import { formActions, categoriesActions } from "../../redux/actions";

export const handleAddCategory = (dispatch, currenctCategoryInfo) => {
    dispatch(categoriesActions.addCategory(currenctCategoryInfo));
};

export const handleEditCategory = (dispatch, currenctCategoryInfo, selectedId) => {
    dispatch(categoriesActions.editCategory(currenctCategoryInfo, parseInt(selectedId)));
    //без этого в на форме добаления не остаются слова после редактирования! TODO: разобраться/исправить
    dispatch(formActions.setType("add"));
};

export const handleDeleteCategory = (dispatch, selectedItems) => {
    console.log('handleDeleteCategory')
    dispatch(
        categoriesActions.deleteCategories(
            Object.keys(selectedItems)
            .filter((item) => selectedItems[item])
            .map((item) => parseInt(item))
        )
    );
};