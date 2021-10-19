import React from "react";
import s from './ProfilePage.module.css';
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import BlackListContainer from "../../admin/AdminProfile/BlackListUsers/BlackListContainer";
import Switches from "../../admin/AdminProfile/Switches/Switches";
import MainUserInfo from "./MainUserInfo/MainUserInfo";
import MyPageContainer from "./MyPage/MyPageContainer";

const ProfilePage = (props) => {
    return (
        <div className={s.wrapper}>
            <MainUserInfo avatar={props.avatar} name={props.name} isFetching={props.isFetching}/>

            {props.isAdmin &&
                <Switches
                    myPage={props.myPage}
                    allUsers={props.allUsers}
                    blackList={props.blackList}
                    toggleSwitches={props.toggleSwitches}
                />
            }

            <div className={s.userInformation}>
                {props.myPage && <MyPageContainer />}
                {props.allUsers && <AllUsersContainer/>}
                {props.blackList && <BlackListContainer/>}
            </div>
        </div>
    )
}

export default ProfilePage;