import React from "react";
import { Link } from "react-router-dom";

import { TopPanel } from "../../components/";
import { Button } from "../../components";
import { Input } from "../../components/Fields";

import "./UserAccount.scss";

const UserAccount = () => {
    return (
        <div>
            <TopPanel />
            <div className="user-page">
                <div className="content">
                    <div className="user-page__form">
                        <Input className="eng-form__item" lable="Новый логин"></Input>
                        <Input className="eng-form__item" lable="Новый пароль"></Input>
                        <div className="user-page__buttons">
                            <Link to="/">
                                <Button className="button_user-page" name="Сохранить">
                                    Сохранить
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button className="button_user-page" name="Отменить">
                                    Отменить
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
