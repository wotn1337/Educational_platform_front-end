import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import ProfileForm from "./ProfileForm/ProfileForm";
import PasswordForm from "./PasswordForm/PasswordForm";
import MainPage from "../MainPage/MainPage";
import {Route} from "react-router-dom";
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";

const ProfilePage = (props) => {
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
        <div className={s.wrapper}>

            <div className={s.user}>
                <img className={s.userPhoto} src={props.profile.avatar || userPhoto} alt="userPhoto"/>
                <input type="file" onChange={() => props.changeField('avatar', props.profile.avatar)} value={props.profile.avatar}/>
                <button onClick={props.updateAvatar}>Change avatar</button>
                <div>
                    <p className={s.userName}>
                        {props.profile.name}
                    </p>
                </div>
            </div>

            {props.profile.role === "admin" &&
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
            }
            {/*Тестовое поле для вывода всех пользователей у админа в профиле*/}
            {<AllUsersContainer/>}

            {/*Стоит вынести мою страницу, список пользователей и черный список в разные компоненты*/}
            {/*<div className={s.userInformation}>*/}
            {/*    {!props.profile.showPasswordForm*/}
            {/*        ? <ProfileForm profile={props.profile} changeField={props.changeField} updateProfile={props.updateProfile}/>*/}
            {/*        : <PasswordForm changeField={props.changeField}/>}*/}

            {/*    <div className={s.buttons}>*/}
            {/*        {!props.profile.showPasswordForm &&*/}
            {/*        <button*/}
            {/*            className={s.btn}*/}
            {/*            onClick={props.profile.showProfileForm*/}
            {/*                ? event => showProfileForm(event)*/}
            {/*                : event => updateProfile(event)*/}
            {/*            }*/}
            {/*        >*/}
            {/*            {props.profile.showProfileForm ? 'Изменить данные' : 'Сохранить данные'}*/}
            {/*        </button>*/}
            {/*        }*/}
            {/*        <button*/}
            {/*            className={s.btn}*/}
            {/*            onClick={*/}
            {/*                event => showPasswordForm(event)*/}
            {/*            }>*/}
            {/*            {props.profile.showPasswordForm ? 'Подтвердить' : 'Изменить пароль'}*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ProfilePage;