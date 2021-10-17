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

    let avatar = null;
    const avatarChange = (e) => {
        avatar = e.target.files[0];
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
                    <input className={s.hide} type='file' id='upload' onChange={e => avatarChange(e)}/>
                    <label className={s.btn} htmlFor="upload">Загрузить аватар</label>
                    <button className={`${s.btnAvatar} ${s.btnUpload}`}
                            onClick={() => props.updateAvatar(avatar)}> </button>
                    <button className={`${s.btnAvatar} ${s.btnDelete}`}
                            onClick={() => props.deleteAvatar()}> </button>
                </div>
        </div>
    );
};

export default MyPage;