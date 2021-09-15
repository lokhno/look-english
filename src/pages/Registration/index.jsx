import React from "react";
import { Form, Button } from "../../components";
import { Input } from "../../components/Fields";
import { Link } from "react-router-dom";

import "./Registration.scss";

function Registration() {
    return (
        <div className="auth-page">
            <div className="eng-form eng-form_auth-page">
                <Input className="eng-form__item" lable="Логин"></Input>
                <Input className="eng-form__item" lable="Email"></Input>
                <Input className="eng-form__item" lable="Пароль"></Input>
                <Input className="eng-form__item" lable="Повторите пароль"></Input>
                <Link to="/">
                    <Button className="button_auth-page" name="Зарегистрироваться">
                        Зарегистрироваться
                    </Button>
                </Link>
                <Link to="/auth">
                    <Button className="button_auth-page" name="Уже есть аккаут">
                        Уже есть аккаут
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Registration;
