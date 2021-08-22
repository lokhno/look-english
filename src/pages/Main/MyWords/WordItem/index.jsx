import React from "react";

import { useDispatch } from "react-redux";

import { ListItem } from "../../../../components";
import WordContent from "../WordContent";
import WordAdditionalInformation from "../WordAdditionalInformation";
import { wordsActions } from "../../../../redux/actions";

function WordItem({ word }) {
    const dispatch = useDispatch();
    const handleSelect = () => {
        dispatch(wordsActions.toggleSelected(word._id));
    };
    return (
        <ListItem onSelect={handleSelect}>
            <WordContent ru={word.ru} eng={word.eng} />
            <WordAdditionalInformation category={word.category} status={word.status} examples={word.examples} />
        </ListItem>
    );
}

export default WordItem;
