import React from 'react';
import s from './Teachers.module.css';
import Pagination from "../../common/Pagination/Pagination";
import avatarPlaceholder from '../../assets/img/profile/teacherAvatarPlaceholder.png';
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
			<div className={s.header}>
				<h1>Преподаватели</h1>
				<div className={s.search}>
					<input
						className={s.searchName}
						type="text"
						value={props.searchName}
						onChange={e => props.setSearchName(e.target.value)}
						placeholder={'Имя преподавателя'}
						onKeyUp={e => {
							if (e.code === 'Enter') {
								props.search();
							}
						}}
					/>
					<button className={s.searchButton} onClick={props.search}/>
				</div>
			</div>
			{props.teachers.length === 0 &&
			<div className={s.noTeachers}>
				С таким именем преподавателей не найдено
				<div className={s.sadSmile}>: (</div>
			</div>
			}
			<div className={s.teachers}>{teachersCards}</div>
			{props.lastPage > 1 &&
			<div style={{width: 'fit-content'}}>
				<Pagination
					handler={props.changePage}
					currentPage={props.currentPage}
					prevPage={props.prevPage}
					lastPage={props.lastPage}
					nextPage={props.nextPage}
				/>
			</div>
			}
		</section>
	);
};

export default Teachers;