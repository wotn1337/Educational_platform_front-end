import React from 'react';
import s from './TeacherInfo.module.css';
import defaultAvatar from '../../../assets/img/profile/user.svg';


const TeacherInfo = ({avatar, name}) => {
	return (
		<section className={s.teacherInfo}>
			<div style={{backgroundImage: `url("${avatar || defaultAvatar}")`}} className={s.teacherAvatar}/>
			<span className={s.teacherName}>{name}</span>
		</section>
	);
};

export default TeacherInfo;