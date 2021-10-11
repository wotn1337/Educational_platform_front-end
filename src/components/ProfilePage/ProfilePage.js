import React from "react";
import s from './ProfilePage.module.css'
import userPhoto from './../../Stylesheets/user.svg'
import ProfileForm from "./ProfileForm/ProfileForm";
import EditProfileForm from "./EditProfileForm/EditProfileForm";

const ProfilePage = (props) => {
	const showProfileForm = (e) => {
		e.preventDefault();
		props.showProfileForm()
	}

	return (
		<div className={s.wrapper}>
			<div className={s.user}>
				<img className={s.userPhoto} src={userPhoto} alt="userPhoto"/>
				<div>
					<p className={s.userName}>
						{props.profile.name}
					</p>
				</div>
			</div>
			{props.role === "admin" &&
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
				</div>}
			<div className={s.userInformation}>
				{props.profile.showProfileForm
					? <ProfileForm email={props.profile.email} birthday={props.profile.birthday}/>
					: <EditProfileForm email={props.profile.email} birthday={props.profile.birthday}/>}
				<button
					className={s.btn}
					onClick={event => showProfileForm(event)}
				>
					{props.profile.showProfileForm ? 'Изменить данные' : 'Сохранить данные'}
				</button>
				<button
					className={s.btn}
				>
					Сбросить пароль
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;