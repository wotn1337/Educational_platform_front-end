import React from 'react';
import s from './LessonsCatalog.module.css';
import LessonsListContainer from "./LessonsList/LessonsListContainer";

const LessonsCatalog = (props) => {
	return (
		<section className={s.content}>
			<h1 className={'pageTitle'}>Каталог уроков</h1>
			<LessonsListContainer />
		</section>
	);
};

export default LessonsCatalog;