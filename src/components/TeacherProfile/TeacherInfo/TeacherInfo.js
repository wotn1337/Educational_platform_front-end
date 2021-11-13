import React from 'react';
import s from './TeacherInfo.module.css';
import defaultAvatar from '../../../assets/img/profile/user.svg';


const TeacherInfo = ({avatar, name, email}) => {
	return (
		<section className={s.teacherInfo}>
			<img src={avatar || defaultAvatar} alt="avatar" className={s.teacherAvatar} width={130} height={130}/>
			<span className={s.teacherName}>{name}</span>
			<span className={s.teacherEmail}>{email}</span>
		</section>
	);
};

export default TeacherInfo;