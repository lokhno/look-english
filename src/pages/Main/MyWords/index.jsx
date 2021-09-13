import React from "react";

import { useSelector } from "react-redux";

import { List, ControlMenu } from "../../../components";
import WordItem from "./WordItem";
import WordForm from "./WordForm";
import { handleDeleteWord } from "../../../utils/helpers/words";

import "./MyWords.scss";

function MyWords() {
    const words = useSelector(({ words }) => {
        return words.items;
    });
    const selectedItems = useSelector(({ words }) => {
        return words.selectedItems;
    });

    return (
        <div>
            <ControlMenu className="my-words__control-menu" selectedItems={selectedItems} handleDelete={handleDeleteWord} />
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
