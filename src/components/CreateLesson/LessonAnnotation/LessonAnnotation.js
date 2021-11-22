import React from 'react';
import s from './LessonAnnotation.module.css';


const LessonAnnotation = ({annotation, changeAnnotation}) => {
	return (
		<div className={s.annotationBlock}>
			<h3 className={s.annotationTitle}>Аннотация к уроку</h3>
			<textarea className={s.annotation} value={annotation} onChange={e => changeAnnotation(e.target.value)}/>
		</div>
	);
};

export default LessonAnnotation;