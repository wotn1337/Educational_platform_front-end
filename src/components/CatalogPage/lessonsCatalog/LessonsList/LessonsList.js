import React from 'react';
import s from './LessonsList.module.css';
import Pagination from "../../../../common/Pagination/Pagination";
import LessonCard from "./LessonCard/LessonCard";


const LessonsList = (props) => {
	const lessons = props.lessons.map(lesson => (
		<LessonCard key={lesson.id} lesson={lesson} toggleFavorite={props.toggleFavorite} role={props.role}/>
	));

	return (
		<section>
			{lessons.length > 0
				? <>
					<div className={s.lessons}>{lessons}</div>
					<Pagination
						handler={props.changePage}
						currentPage={props.currentPage}
						prevPage={props.prevPage}
						lastPage={props.lastPage}
						nextPage={props.nextPage}
					/>
				</>
				: <div className={s.noLessons}>
					С такими параметрами уроков не найдено
					<div className={s.sadSmile}>: (</div></div>
			}
		</section>
	);
};

export default LessonsList;