import React from 'react';
import s from './Lesson.module.css';


const Lesson = ({id, ...props}) => {
	return (
		<section className={s.content}>
			<h1 className={'pageTitle'}>Страница урока c id [{id}]</h1>
		</section>
	);
};

export default Lesson;