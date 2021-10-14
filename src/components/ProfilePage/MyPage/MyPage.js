import React from "react";
import s from './../ProfilePage.module.css'
import ProfileForm from "./../ProfileForm/ProfileForm";
import PasswordForm from "./../PasswordForm/PasswordForm";

const MyPage = (props) => {
    const showProfileForm= (e) => {
        e.preventDefault();
        props.showProfileForm();
    }

    const showPasswordForm= (e) => {
        e.preventDefault();
        props.showPasswordForm();
    }

    const updateProfile = (e) => {
        e.preventDefault();
        props.updateProfile();
        showProfileForm(e);
    }

    return (
        <div>
                {!props.profile.showPasswordForm
                    ? <ProfileForm profile={props.profile} changeField={props.changeField} updateProfile={props.updateProfile}/>
                    : <PasswordForm changeField={props.changeField}/>}

                <div className={s.buttons}>
                    {!props.profile.showPasswordForm &&
                    <button
                        className={s.btn}
                        onClick={props.profile.showProfileForm
                            ? event => showProfileForm(event)
                            : event => updateProfile(event)
                        }
                    >
                        {props.profile.showProfileForm ? 'Изменить данные' : 'Сохранить данные'}
                    </button>
                    }
                    <button
                        className={s.btn}
                        onClick={
                            event => showPasswordForm(event)
                        }>
                        {props.profile.showPasswordForm ? 'Подтвердить' : 'Изменить пароль'}
                    </button>
                </div>
        </div>
    );
};

export default MyPage;