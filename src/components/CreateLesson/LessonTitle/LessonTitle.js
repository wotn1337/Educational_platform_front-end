import React from "react";
import s from './LessonTitle.module.css';

const LessonTitle = ({title, changeLessonTitle, ...props}) => {
	return (
		<div className={s.fragmentTitleBlock}>
			<h3 className={s.preTitle}>Название вашего урока</h3>
			<input
				type="text"
				name={'fragmentTitle'}
				className={s.fragmentTitle}
				value={title}
				onChange={e => changeLessonTitle(e.target.value)}
			/>
		</div>
	);
};

export default LessonTitle;