import React from "react";

import './WordContent.scss'

function WordContent({ru, eng}) {
    return (
        <div className='word-content'>
            <div className="word-content__eng-word">{eng}</div>
            <div className="word-content__separator">
                <div> </div>
            </div>
            <div className="word-content__rus-word">{ru}</div>
        </div>
    );
}

export default WordContent;
