import React from "react";

import { Navigation, TopPanel, ControlMenu } from "../../components";

import "./Main.scss";

function Main() {
    return (
        <div>
            <TopPanel />
            <div className="main-page">
                <Navigation />
                <div className="content">
                    <div className="content_container">
                        <ControlMenu />
                        <ul className="eng-list">
                            {/* <!-- Показать что слово выбрано eng-list-item_active --> */}
                            <li className="eng-list__item eng-list-item">
                                <div className="eng-list-item__container">
                                    <div className="eng-list-item__eng-word">good</div>
                                    <div className="eng-list-item__separator">
                                        <div> </div>
                                    </div>
                                    <div className="eng-list-item__rus-word">хорошо</div>
                                    {/* <!-- Чтобы перевернуть иконку, необходимо добавить класс eng-list-item__info-visibility_open --> */}
                                    <div className="eng-list-item__info-visibility eng-list-item__info-visibility_open">
                                        <i className="fas fa-chevron-down btn-icon"></i>
                                        <i className="fas fa-chevron-up btn-icon"></i>
                                    </div>
                                </div>
                                {/* <!-- Чтобы показать подробную информацию, нужно добавить класс eng-list-item__info_open --> */}
                                <div className="eng-list-item__info eng-list-item__info_open">
                                    <div>Статус: Выучено</div>
                                    <div>Категория: Новые слова</div>
                                </div>
                            </li>
                            <li className="eng-list__item eng-list-item">
                                <div className="eng-list-item__container">
                                    <div className="eng-list-item__eng-word">bad</div>
                                    <div className="eng-list-item__separator">
                                        <div></div>
                                    </div>
                                    <div className="eng-list-item__rus-word">плохо</div>
                                    {/* <!-- Чтобы перевернуть иконку, необходимо добавить класс eng-list-item__info-visibility_open --> */}
                                    <div className="eng-list-item__info-visibility">
                                        <i className="fas fa-chevron-down btn-icon"></i>
                                        <i className="fas fa-chevron-up btn-icon"></i>
                                    </div>
                                </div>
                                {/* <!-- Чтобы показать подробную информацию, нужно добавить класс eng-list-item__info_open --> */}
                                <div className="eng-list-item__info">
                                    <div>Статус: Выучено</div>
                                    <div>Категория: Новые слова</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
