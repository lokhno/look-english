import React from "react";
import { Form, Button } from "../../components";
import { Input } from "../../components/Fields";

import "./Auth.scss";

function Auth() {
    return (
        <div className="auth-page">
            <div className="eng-form eng-form_auth-page">
                <Input className="eng-form__item" lable="Логин"></Input>
                <Input className="eng-form__item" lable="Пароль"></Input>
                <Button className="button_auth-page" name="Войти">
                    Войти
                </Button>
                <Button className="button_auth-page" name="Зарегистрироваться">
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    );
}

export default Auth;
