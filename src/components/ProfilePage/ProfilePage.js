import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import ProfileForm from "./ProfileForm/ProfileForm";
import PasswordForm from "./PasswordForm/PasswordForm";
import {showPasswordForm} from "../../redux/profileReducer";

const ProfilePage = (props) => {

    const showProfileForm= (e) => {
        e.preventDefault();
        props.showProfileForm();
    }

    const showPasswordForm= (e) => {
        e.preventDefault();
        props.showPasswordForm();
    }

    return (
        <div className={s.wrapper}>

            <div className={s.user}>
                <img className={s.userPhoto} src={userPhoto} alt="userPhoto"/>
                <div>
                    <p className={s.userName}>
                        Имя Фамилия
                    </p>
                </div>
            </div>

            {props.role === "admin" &&
                <div className={s.switches}>
                    <div className={s.switch}>
                        Моя страница
                    </div>
                    <div className={s.switch}>
                        Список пользователей
                    </div>
                    <div className={s.switch}>
                        Черный список
                    </div>
                </div>}

            <div className={s.userInformation}>
                {!props.profile.showPasswordForm ? <ProfileForm profile={props.profile}
                                                              changeField={props.changeField}/>
                    : <PasswordForm changeField={props.changeField}/>}

                <div className={s.buttons}>
                    <button
                        className={s.btn}
                        onClick={
                            event => showProfileForm(event)
                        }>
                        {props.profile.showProfileForm ? 'Изменить данные' : 'Сохранить данные'}
                    </button>
                    <button
                        className={s.btn}
                        onClick={
                            event => showPasswordForm(event)
                        }>
                        {props.profile.showPasswordForm ? 'Подтвердить' : 'Сбросить пароль'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;