import React from "react";
import s from './../ProfilePage.module.css'
import ProfileFormContainer from "../ProfileForm/ProfileFormContainer";
import PasswordFormContainer from "../PasswordForm/PasswordFormContainer";
import UploadAvatarContainer from "../UploadAvatar/UploadAvatarContainer";

const MyPage = (props) => {

	return (
		<div>
			{props.profileForm
				? <ProfileFormContainer
					isEdit={props.isEditProfileInfo}
					toggleIsEditProfileForm={props.toggleIsEditProfileForm}
				/>
				: <PasswordFormContainer
					togglePasswordForm={props.togglePasswordForm}
					changeField={props.changeField}
					profileForm={props.profileForm}
				/>
			}

			<div className={s.buttons}>
				{props.profileForm &&
				<button
					className={s.btn}
					onClick={props.toggleIsEditProfileForm}
				>
					{!props.isEditProfileInfo ? 'Изменить данные' : 'Назад'}
				</button>
				}

				{!props.isEditProfileInfo && <button
					className={s.btn}
					onClick={props.togglePasswordForm}>
					{!props.profileForm ? 'Назад' : 'Изменить пароль'}
				</button>
				}
				{!props.isEditProfileInfo && props.profileForm && <UploadAvatarContainer />}
			</div>
		</div>
	);
};

export default MyPage;