import React from 'react';
import s from './LessonPreview.module.css';
import ThisTags from "../../CreateFragment/ThisTags/ThisTags";
import Author from "../Author/Author";
import lessonPlaceholder from '../../../assets/img/lessons/lessonPlaceholder_large.png';

const LessonPreview = ({annotation, image, creatorAvatar, creatorName, tags, ...props}) => {
	const preview = typeof image === 'string' || typeof image === 'undefined' ? image : URL.createObjectURL(image);
	return (
		<div className={s.lessonPreview}>
			<img className={s.lessonImage} src={preview || lessonPlaceholder} alt={'lesson preview'}/>
			<h6 className={s.annotationTitle}>Описание урока</h6>
			<p>{annotation}</p>
			<div className={s.bottom}>
				<ThisTags tags={tags} edit={false}/>
				<Author name={creatorName} id={props.creatorId} avatar={creatorAvatar}/>
			</div>
		</div>
	);
};

export default LessonPreview;