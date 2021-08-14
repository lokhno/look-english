import React from "react";

import { useSelector } from "react-redux";

import { List } from "../../../components";
import WordItem from "./WordItem";

import "./MyWords.scss";

function MyWords() {
    const words = useSelector(({ words }) => {
        return words.items;
    });

    return (
        <List className="list__words">
            {words.map((item) => (
                <WordItem key={item.id} word={item} />
            ))}
        </List>
    );
}

export default MyWords;
