import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import BlackList from "../../admin/AdminProfile/BlackListUsers/BlackListUsers";
import MyPage from "./MyPage/MyPage";

class ProfilePage extends React.Component {
    state = {
        isMyPage: true,
        isAllUsers: false,
        isBlackListUsers: false
    }

    toggleSwitches = () => {
        if (this.props.profile.isMyPage !== this.state.isMyPage) {
            this.setState({isMyPage: this.props.profile.isMyPage});
        }
        if (this.props.profile.isAllUsers !== this.state.isAllUsers) {
            this.setState({isAllUsers: this.props.profile.isAllUsers});
        }
        if (this.props.profile.isBlackListUsers !== this.state.isBlackListUsers) {
            this.setState({isBlackListUsers: this.props.profile.isBlackListUsers});
        }
    }

    render() {
        this.toggleSwitches();
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
                    <div className={this.state.isMyPage ? `${s.switch} ${s.switchActive}` : s.switch}
                    onClick={event => {
                        event.preventDefault();
                        this.props.toggleSwitches('myPage')
                    }}>
                        Моя страница
                    </div>
                    <div className={this.state.isAllUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                         onClick={event => {
                             event.preventDefault();
                             this.props.toggleSwitches('allUsers')
                         }}>
                        Список пользователей
                    </div>
                    <div className={this.state.isBlackListUsers ? `${s.switch} ${s.switchActive}` : s.switch}
                         onClick={event => {
                             event.preventDefault();
                             this.props.toggleSwitches('blackListUsers')
                         }}>
                        Черный список
                    </div>
                </div>
                }

                <div className={s.userInformation}>
                    {this.state.isMyPage && <MyPage showProfileForm={this.props.showProfileForm}
                                               showPasswordForm={this.props.showPasswordForm}
                                               changeField={this.props.changeField}
                                               updateProfile={this.props.updateProfile}
                                               updateAvatar={this.props.updateAvatar}
                                               profile={this.props.profile}/>}
                    {this.state.isAllUsers && <AllUsersContainer/>}
                    {/*{this.state.isBlackListUsers && <BlackList/>}*/}
                </div>

            </div>
        )
    }
}

export default ProfilePage;













/*const ProfilePage = (props) => {

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
                <div className={props.isMyPage ? `${s.switch} ${s.switchActive}` : s.switch} onClick={
                    props.toggleSwitches('myPage')}>
                    Моя страница
                </div>
                <div className={props.isAllUsers ? `${s.switch} ${s.switchActive}` : s.switch} onClick={
                    props.toggleSwitches('allUsers')}>
                    Список пользователей
                </div>
                <div className={props.isBlackListUsers ? `${s.switch} ${s.switchActive}` : s.switch} onClick={
                    props.toggleSwitches('blackListUsers')}>
                    Черный список
                </div>
            </div>

            }

            <div className={s.userInformation}>
                {props.isMyPage && <MyPage showProfileForm={props.showProfileForm}
                                           showPasswordForm={props.showPasswordForm}
                                           changeField={props.changeField}
                                           updateProfile={props.updateProfile}
                                           updateAvatar={props.updateAvatar}
                                           profile={props.profile}/>}
                {props.isAllUsers && <AllUsersContainer/>}
                {props.isBlackListUsers && <BlackList/>}
            </div>
        </div>
    );
};

export default ProfilePage; */