import React from "react";
import s from './../ProfilePage.module.css'
import PasswordInput from "../../AuthPage/inputFieldComponents/PasswordInput";

const PasswordForm = (props) => {
    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <label htmlFor="validationDefaultPassword" className={`form-label ${s.formLabel}`}>Текущий пароль</label>
                <PasswordInput changeField={props.changeField}/>
                <label htmlFor="validationDefaultPassword" className={`form-label ${s.formLabel}`}>Новый пароль</label>
                <PasswordInput changeField={props.changeField}/>
            </form>
        </div>
    );
};

export default PasswordForm;