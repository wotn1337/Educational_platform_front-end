import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import BlackList from "../../admin/AdminProfile/BlackListUsers/BlackListUsers";
import MyPage from "./MyPage/MyPage";

class ProfilePage extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.user}>
                    <img className={s.userPhoto} src={this.props.profile.avatar || userPhoto} alt="userPhoto"/>
                    <div>
                        <p className={s.userName}>
                            {this.props.profile.name}
                        </p>
                    </div>
                </div>

                {this.props.profile.role === "admin" &&
                <div className={s.switches}>
                    <div className={this.props.profile.isMyPage ? `${s.switch} ${s.switchActive}` : s.switch}
                         onClick={event => {
                             event.preventDefault();
                             this.props.toggleSwitches('myPage')
                         }}>
                        Моя страница
                    </div>
                    <div className={this.props.profile.isAllUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                         onClick={event => {
                             event.preventDefault();
                             this.props.toggleSwitches('allUsers')
                         }}>
                        Список пользователей
                    </div>
                    <div className={this.props.profile.isBlackListUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                         onClick={event => {
                             event.preventDefault();
                             this.props.toggleSwitches('blackListUsers')
                         }}>
                        Черный список
                    </div>
                </div>
                }

                <div className={s.userInformation}>
                    {this.props.profile.isMyPage && <MyPage showProfileForm={this.props.showProfileForm}
                                                            showPasswordForm={this.props.showPasswordForm}
                                                            changeField={this.props.changeField}
                                                            updateProfile={this.props.updateProfile}
                                                            updateAvatar={this.props.updateAvatar}
                                                            profile={this.props.profile}/>}
                    {this.props.profile.isAllUsers && <AllUsersContainer/>}
                    {/*{this.state.isBlackListUsers && <BlackList/>}*/}
                </div>

            </div>
        )
    }
}

export default ProfilePage;