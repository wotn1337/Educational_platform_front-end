import React from 'react';
import s from './LessonAnnotation.module.css';


const LessonAnnotation = ({annotation, changeAnnotation, error}) => {
	return (
		<div className={s.annotationBlock}>
			<h3 className={s.annotationTitle}>Аннотация к уроку</h3>
			<textarea className={s.annotation} value={annotation} onChange={e => changeAnnotation(e.target.value)}/>
			<span className={s.symbolCount} style={{color: `${annotation.length > 255 ? '#F56464' : '#50b340'}`}}>
				{annotation.length > 255 ? 'Аннотация слишком длинная' : `Осталось символов: ${255 - annotation.length}`}
			</span>
			<p className={'inputError'}>{error}</p>
		</div>
	);
};

export default LessonAnnotation;