import React from "react";
import s from './LessonTitle.module.css';

const LessonTitle = ({title, changeLessonTitle, ...props}) => {
	return (
		<div className={s.fragmentTitleBlock}>
			<div className={s.preTitle}>Название вашего урока</div>
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