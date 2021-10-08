import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'

const ProfilePage = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.user}>
				<img className={s.userPhoto} src={userPhoto} alt="userPhoto"/>
				<div>
					<p className={s.userName}>
						Имя Фамилия
					</p>
				</div>
			</div>
			<div className={s.userInformation}>
				<form>

				</form>
				<button className={s.btn}>
					Изменить данные
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;