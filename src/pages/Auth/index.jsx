import React from "react";
import { Button } from "../../components";
import { Input } from "../../components/Fields";
import { Link } from "react-router-dom";

import "./Auth.scss";

function Auth() {
    return (
        <div className="auth-page">
            <div className="eng-form eng-form_auth-page">
                <Input className="eng-form__item" lable="Логин"></Input>
                <Input className="eng-form__item" lable="Пароль"></Input>
                <Link to="/">
                    <Button className="button_auth-page" name="Войти">
                        Войти
                    </Button>
                </Link>
                <Link to="/registration">
                    <Button className="button_auth-page" name="Зарегистрироваться">
                        Зарегистрироваться
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Auth;
