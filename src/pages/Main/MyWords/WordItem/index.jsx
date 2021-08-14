import React from "react";

import { ListItem } from "../../../../components";
import WordContent from "../WordContent";

function WordItem({ word }) {
    return (
        <ListItem>
            <WordContent ru={word.ru} eng={word.eng} />
        </ListItem>
    );
}

export default WordItem;
