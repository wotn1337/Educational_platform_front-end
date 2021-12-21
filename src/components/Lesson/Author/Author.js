import React from 'react';
import s from '../Fragment/Fragment.module.css';
import avatarPlaceholder from "../../../assets/img/profile/teacherProfile.svg";
import {NavLink} from "react-router-dom";


const Author = ({name, avatar, id}) => {
	return (
		<div className={s.author}>
			<NavLink to={`/profile/${id}`} className={s.authorName}>{name}</NavLink>
			<div style={{backgroundImage: `url("${avatar || avatarPlaceholder}")`}} className={s.authorAvatar}/>
		</div>
	);
};

export default Author;