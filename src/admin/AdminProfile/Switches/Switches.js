import React from "react";
import s from "../../../components/ProfilePage/ProfilePage.module.css";


const Switches = (props) => {
	return (
		<div className={s.switches}>
			<div className={`${s.switch} ${props.myPage && s.switchActive}`}
			     onClick={() => props.toggleSwitches('myPage')}>
				Моя страница
			</div>
			<div className={`${s.switch} ${props.allUsers && s.switchActive}`}
			     onClick={() => props.toggleSwitches('allUsers')}>
				Список пользователей
			</div>
			<div className={`${s.switch} ${props.blackList && s.switchActive}`}
			     onClick={() => props.toggleSwitches('blackList')}>
				Черный список
			</div>
		</div>
	);
};

export default Switches;