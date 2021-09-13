import { formActions, wordsActions } from "../../redux/actions";

export const handleAddWord = (dispatch, currenctWordInfo) => {
    dispatch(wordsActions.addWord(currenctWordInfo));
};
export const handleEditWord = (dispatch, currenctWordInfo, selectedId) => {
    dispatch(wordsActions.editWord(currenctWordInfo, parseInt(selectedId)));
    //без этого в на форме добаления не остаются слова после редактирования! TODO: разобраться/исправить
    dispatch(formActions.setType("add"));
};

export const handleDeleteWord = (dispatch, selectedItems) => {
    dispatch(
        wordsActions.deleteWords(
            Object.keys(selectedItems)
            .filter((item) => selectedItems[item])
            .map((item) => parseInt(item))
        )
    );
};

export const shuffle = (arr) => {
    const putToCache = (elem, cache) => {
        if (cache.indexOf(elem) !== -1) {
            return;
        }
        var i = Math.floor(Math.random() * (cache.length + 1));
        cache.splice(i, 0, elem);
    };

    const madness = () => {
        var cache = [];
        return (a, b) => {
            putToCache(a, cache);
            putToCache(b, cache);
            return cache.indexOf(b) - cache.indexOf(a);
        };
    };
    var compare = madness();
    return arr.sort(compare);
};