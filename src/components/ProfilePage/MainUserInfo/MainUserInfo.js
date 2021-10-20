import React from "react";
import s from "../../../components/ProfilePage/ProfilePage.module.css";
import generalAvatar from "../../../Stylesheets/user.svg";
import Preloader from "../../Preloader/Preloader";


const MainUserInfo = (props) => {
	if (props.isFetching) {
		return <Preloader size={'200px'}/>
	}

	return (
		<div className={s.user}>
			<img className={`${s.avatar} ${props.avatar && s.userAvatar}`} src={props.avatar || generalAvatar} alt="generalAvatar"/>
			<div>
				<p className={s.userName}>
					{props.name}
				</p>
			</div>
		</div>
	);
};

export default MainUserInfo;