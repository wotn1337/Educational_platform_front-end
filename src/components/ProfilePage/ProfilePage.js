import React from "react";
import s from './ProfilePage.module.css'
import generalAvatar from '../../Stylesheets/user.svg'
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import MyPage from "./MyPage/MyPage";
import BlackListContainer from "../../admin/AdminProfile/BlackListUsers/BlackListContainer";

const ProfilePage = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.user}>
                <img className={!props.profile.avatar ? s.avatar : `${s.userAvatar} ${s.avatar}`}
                     src={props.profile.avatar || generalAvatar} alt="generalAvatar"/>
                <div>
                    <p className={s.userName}>
                        {props.profile.name}
                    </p>
                </div>
            </div>

            {props.profile.role === "admin" &&
            <div className={s.switches}>
                <div className={props.profile.isMyPage ? `${s.switch} ${s.switchActive}` : s.switch}
                     onClick={event => {
                         event.preventDefault();
                         props.toggleSwitches('myPage')
                     }}>
                    Моя страница
                </div>
                <div className={props.profile.isAllUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                     onClick={event => {
                         event.preventDefault();
                         props.toggleSwitches('allUsers')
                     }}>
                    Список пользователей
                </div>
                <div className={props.profile.isBlackListUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                     onClick={event => {
                         event.preventDefault();
                         props.toggleSwitches('blackListUsers')
                     }}>
                    Черный список
                </div>
            </div>
            }

            <div className={s.userInformation}>
                {props.profile.isMyPage && <MyPage showProfileForm={props.showProfileForm}
                                                   showPasswordForm={props.showPasswordForm}
                                                   changeField={props.changeField}
                                                   updateProfile={props.updateProfile}
                                                   updateAvatar={props.updateAvatar}
                                                   profile={props.profile}
                                                   deleteAvatar={props.deleteAvatar}
                                                   changePassword={props.changePassword}
                />}
                {props.profile.isAllUsers && <AllUsersContainer/>}
                {props.profile.isBlackListUsers && <BlackListContainer/>}
            </div>
        </div>
    )
}

export default ProfilePage;