import React from 'react';
import s from './Teachers.module.css';
import Pagination from "../../common/Pagination/Pagination";
import avatarPlaceholder from '../../assets/img/profile/teacherAvatarPlaceholder.png';
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Teachers = (props) => {
	const teachersCards = props.teachers.map(teacher => (
		<NavLink to={`profile:${teacher.id}`} className={s.teacherCard} key={teacher.id}>
			<img className={s.avatar} src={teacher.avatar || avatarPlaceholder} alt="avatar"/>
			<span className={s.name}>{teacher.name}</span>
			<div>
				<span className={s.countTitle}>Фрагменты: <span
					className={s.count}>{Math.floor(Math.random() * 1000)}</span></span>
				<span className={s.countTitle}>Уроки: <span
					className={s.count}>{Math.floor(Math.random() * 1000)}</span></span>
			</div>
		</NavLink>
	));

	return (
			<section className={s.teachersWrapper}>
				<h1>Преподаватели</h1>
				{props.isFetching
					? <Preloader size={200}/>
					: <div className={s.teachers}>{teachersCards}</div>
				}
				<div style={{width: '40%'}}>
					<Pagination
						handler={props.changePage}
						currentPage={props.currentPage}
						prevPage={props.prevPage}
						lastPage={props.lastPage}
						nextPage={props.nextPage}
					/>
				</div>
			</section>
	);
};

export default Teachers;