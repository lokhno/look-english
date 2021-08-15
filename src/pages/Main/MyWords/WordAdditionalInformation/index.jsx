import React from "react";

function WordAdditionalInformation({status, category}) {
    return (
        <div>
            <div>Статус: {status}</div>
            <div>Категория: {category}</div>
        </div>
    );
}

export default WordAdditionalInformation;
