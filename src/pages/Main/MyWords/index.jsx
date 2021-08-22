import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { wordsActions } from "../../../redux/actions";
import { List, ControlMenu } from "../../../components";
import WordItem from "./WordItem";
import WordForm from "./WordForm";

import "./MyWords.scss";

function MyWords() {
    const dispatch = useDispatch();
    const words = useSelector(({ words }) => {
        return words.items;
    });
    const selectedItems = useSelector(({ words }) => {
        return words.selectedItems;
    });

    const handleDelete = () => {
        dispatch(
            wordsActions.deleteWords(
                Object.keys(selectedItems)
                    .filter((item) => selectedItems[item])
                    .map((item) => parseInt(item))
            )
        );
    };

    return (
        <div>
            <ControlMenu className="my-words__control-menu" selectedItems={selectedItems} handleDelete={handleDelete} />
            <WordForm selectedItems={selectedItems} words={words} />
            <div className="my-words">
                <List className="my-words__list">
                    {words.map((item) => (
                        <WordItem key={item._id} word={item} />
                    ))}
                </List>
            </div>
        </div>
    );
}

export default MyWords;
