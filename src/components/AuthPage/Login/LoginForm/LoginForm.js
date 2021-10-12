import React from "react";
import EmailInput from "../../inputFieldComponents/EmailInput";
import PasswordInput from "../../inputFieldComponents/PasswordInput";
import s from "./../../AuthPage.module.css";


const LoginForm = (props) => {
    const login = (e) => {
        e.preventDefault();
        props.login();
    }


    const showResetForm = (e) => {
        e.preventDefault();
        props.showResetPasswordFormAC();
    }

    return (
        <div className={s.form}>
            <form>
                <h1 className={s.text}>Войти в свой кабинет</h1>
                <div className={`invalid-feedback ${s.invalidFeedback}`}>
                    {props.validationMessages.all}
                </div>
                <EmailInput
                    changeField={props.changeField}
                    email={props.email}
                    validationMessage={props.validationMessages.email}
                />
                <PasswordInput
                    changeField={props.changeField}
                    password={props.password}
                    validationMessage={props.validationMessages.password}
                />
            </form>
            <button
                className={`${s.btn}`}
                onClick={event => login(event)}
                disabled={props.isFetching}
            >
                Подтвердить
            </button>
            <a
                href="#"
                className={`${s.resetLink}`}
                onClick={event => showResetForm(event)}
            >
                Забыли пароль?
            </a>
        </div>
    );
};

export default LoginForm;