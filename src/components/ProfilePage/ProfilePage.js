import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import ProfileForm from "./ProfileForm/ProfileForm";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import PasswordForm from "./PasswordForm/PasswordForm";

const ProfilePage = (props) => {
    const showProfileForm = (e) => {
        e.preventDefault();
        props.changeShowProfilerForm()
    }
    const showPasswordForm = (e) => {
        e.preventDefault();
        props.changeShowPasswordForm()
    }
    const passwordFormIsShowing = () => {
        return props.profile.showPasswordForm;
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

            {props.role === "admin" ?
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
                </div>
                : null}

            <div className={s.userInformation}>
                {props.profile.showProfileForm&&!props.profile.showPasswordForm ? <ProfileForm/> :
                    <EditProfileForm changeField={props.changeField}
                                     profile={props.profile}
                                     changeShowPasswordForm={props.changeShowPasswordForm}/>}
                {/*{!props.profile.showPasswordForm ? <ProfileForm/> :*/}
                {/*    <PasswordForm changeField={props.changeField} changeShowPasswordForm={props.changeShowPasswordForm}/>}*/}
                <div className={s.buttons}>
                    <button
                        className={s.btn}
                        onClick={
                            event => showProfileForm(event)}>
                        {props.profile.showProfileForm ? 'Изменить данные' : 'Сохранить данные'}
                    </button>
                    <button
                        className={s.btn}
                        onClick={ event => showPasswordForm(event)}>
                        {props.profile.showPasswordForm ? 'Подтвердить' : 'Сменить пароль'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;