import React from 'react';
import s from './TeacherInfo.module.css';
import {roles} from "../../../common/roles";
import defaultAvatar from '../../../assets/img/profile/user.svg';


const TeacherInfo = ({avatar, name, role, email}) => {
	return (
		<section className={s.teacherInfo}>
			<img src={avatar || defaultAvatar} alt="avatar" className={s.teacherAvatar}/>
			<span className={s.teacherName}>{name}</span>
			<span className={s.role}>{roles[role]}</span>
			<span className={s.teacherEmail}>{email}</span>
		</section>
	);
};

export default TeacherInfo;