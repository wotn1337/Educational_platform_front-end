import React from 'react';
import s from './LessonsList.module.css';
import Pagination from "../../../../common/Pagination/Pagination";
import LessonCard from "./LessonCard/LessonCard";


const LessonsList = (props) => {
	const lessons = props.lessons.map(lesson => (
		<LessonCard key={lesson.id} lesson={lesson} toggleFavorite={props.toggleFavorite}/>
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