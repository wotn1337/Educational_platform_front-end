import React from 'react';
import s from './LessonsList.module.css';
import Pagination from "../../../../common/Pagination/Pagination";
import {NavLink} from "react-router-dom";


const LessonsList = (props) => {
	const lessons = props.lessons.map(lesson => (
		<NavLink to={`lesson/${lesson.id}`} key={lesson.id} className={s.lessonCard}>Здесь будет урок <strong>{lesson.title}</strong></NavLink>
	));

	return (
		<section>
			<div className={s.lessons}>{lessons}</div>
			<Pagination
				handler={props.changePage}
				currentPage={props.currentPage}
				prevPage={props.prevPage}
				lastPage={props.lastPage}
				nextPage={props.nextPage}
			/>
		</section>
	);
};

export default LessonsList;