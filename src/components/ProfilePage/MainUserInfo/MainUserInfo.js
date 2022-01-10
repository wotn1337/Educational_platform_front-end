import React from "react";
import s from "../../../components/ProfilePage/ProfilePage.module.css";
import generalAvatar from "../../../assets/img/profile/user.svg";
import Preloader from "../../common/Preloader/Preloader";


const MainUserInfo = (props) => {
	if (props.isFetching) {
		return <Preloader size={'200px'}/>
	}

	return (
		<div className={s.user}>
			<div className={`${s.avatar} ${props.avatar && s.userAvatar}`} style={{backgroundImage: `url("${props.avatar || generalAvatar}")`}}/>
			<div>
				<p className={s.userName}>
					{props.name}
				</p>
			</div>
		</div>
	);
};

export default MainUserInfo;