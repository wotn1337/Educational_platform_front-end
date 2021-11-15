import React, {useState} from "react";
import s from './ProfilePage.module.css';
import AllUsersContainer from "../../admin/AdminProfile/AllUsers/AllUsersContainer";
import BlackListContainer from "../../admin/AdminProfile/BlackListUsers/BlackListContainer";
import MainUserInfo from "./MainUserInfo/MainUserInfo";
import MyPageContainer from "./MyPage/MyPageContainer";
import Switches from "../../common/Switches/Switches";

const ProfilePage = (props) => {
    const [profile, setProfile] = useState(true);
    const [allUsers, setAllUsers] = useState(false);
    const [blackList, setBlackList] = useState(false);

    return (
        <div className={s.wrapper}>
            <MainUserInfo avatar={props.avatar} name={props.name} isFetching={props.isFetching}/>

            {props.isAdmin &&
                <Switches
                    switches={{
                        'Мой профиль': [profile, setProfile],
                        'Все пользователи': [allUsers, setAllUsers],
                        'Черный список': [blackList, setBlackList]
                    }}
                />
            }

            <div className={s.userInformation}>
                {profile && <MyPageContainer />}
                {allUsers && <AllUsersContainer/>}
                {blackList && <BlackListContainer/>}
            </div>
        </div>
    )
}

export default ProfilePage;