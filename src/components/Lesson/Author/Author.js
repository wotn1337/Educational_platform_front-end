import React from 'react';
import s from '../Fragment/Fragment.module.css';
import avatarPlaceholder from "../../../assets/img/profile/teacherProfile.svg";


const Author = ({name, avatar}) => {
	return (
		<div className={s.author}>
			<span className={s.authorName}>{name}</span>
			<div style={{backgroundImage: `url("${avatar || avatarPlaceholder}")`}} className={s.authorAvatar}/>
		</div>
	);
};

export default Author;