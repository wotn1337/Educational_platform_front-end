import React from "react";
import s from './../ProfilePage.module.css'
import PasswordInput from "../../AuthPage/inputFieldComponents/PasswordInput";

const PasswordForm = (props) => {
    const showProfileForm = (e) => {
        e.preventDefault();
        props.changeShowProfilerForm()
    }
    // const showPasswordForm = (e) => {
    //     e.preventDefault();
    //     props.changeShowPasswordForm()
    // }
    const passwordFormIsShowing = () => {
        return props.profile.showPasswordForm;
    }


    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <label htmlFor="validationDefaultPassword" className={`form-label ${s.formLabel}`}>Текущий пароль</label>
                <PasswordInput changeField={props.changeField}/>
                <label htmlFor="validationDefaultPassword" className={`form-label ${s.formLabel}`}>Новый пароль</label>
                <PasswordInput changeField={props.changeField}/>
            </form>
            {/*<button*/}
            {/*    className={s.btn}*/}
            {/*    onClick={event => showPasswordForm(event)}>*/}
            {/*    Подтвердить*/}
            {/*</button>*/}
        </div>
    );
};

export default PasswordForm;