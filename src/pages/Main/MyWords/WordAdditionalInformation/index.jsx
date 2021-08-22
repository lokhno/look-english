import React from "react";

function WordAdditionalInformation({status, category, examples}) {
    return (
        <div>
            <div>Статус: {status}</div>
            <div>Категория: {category}</div>
            <div>Примеры: {examples}</div>
        </div>
    );
}

export default WordAdditionalInformation;
