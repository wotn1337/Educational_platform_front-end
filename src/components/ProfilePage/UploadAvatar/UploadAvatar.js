import React, {useState} from "react";
import s from './../ProfilePage.module.css'

const UploadAvatar = (props) => {
	const [avatar, setAvatar] = useState(null);
	const [avatarSrc, setAvatarSrc] = useState('');
	const getImgSrc = (avatar) => {
		const reader = new FileReader();
		reader.readAsDataURL(avatar);
		reader.onloadend = function () {
			setAvatarSrc([reader.result]);
		}
	}
	return (
		<div className={s.uploadAvatarBlock}>
			<input className={s.hide} type='file' id='upload' accept={'image/*'} onChange={e => {
				setAvatar(e.target.files[0]);
				getImgSrc(e.target.files[0]);
			}}/>
			{avatar && <img src={avatarSrc} alt="avatar preview" className={s.avatarPreview}/>}
			<label className={`${s.btn} ${s.btnMobile}`} htmlFor="upload">{avatar ? 'Выбрать другое фото' : 'Загрузить аватар'}</label>
			{avatar && <button className={`${s.btnAvatar} ${s.btnUpload}`} onClick={() => {
				props.updateAvatar(avatar);
				setAvatar(null);
				setAvatarSrc(null);
			}}/>}
			<button className={`${s.btnAvatar} ${s.btnDelete}`} onClick={() => props.deleteAvatar()}/>
		</div>
	);
};

export default UploadAvatar;