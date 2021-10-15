import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import BlackList from "../../admin/AdminProfile/BlackListUsers/BlackListUsers";
import MyPage from "./MyPage/MyPage";

const ProfilePage = (props) => {

    return (
        <div className={s.wrapper}>

            <div className={s.user}>
                <img className={s.userPhoto} src={props.profile.avatar || userPhoto} alt="userPhoto"/>
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

            <div className={s.userInformation}>
                <MyPage showProfileForm={props.showProfileForm}
                        showPasswordForm={props.showPasswordForm}
                        changeField={props.changeField}
                        updateProfile={props.updateProfile}
                        updateAvatar={props.updateAvatar}
                        profile={props.profile}/>
                {/*<AllUsersContainer/>*/}
                {/*<BlackList/>*/}
            </div>
        </div>
    );
};

export default ProfilePage;