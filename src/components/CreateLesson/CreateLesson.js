import React from "react";
import s from './CreateLesson.module.css';
import LessonTitle from "./LessonTitle/LessonTitle";
import FragmentsBlock from "./FragmentsBlock/FragmentsBlock";


const CreateLesson = (props) => {
	return (
		<div className={s.content}>
			<LessonTitle/>
			<FragmentsBlock fragments={props.fragments} addFragment={props.addFragment}/>
			<button className={s.createButton}>Создать
			</button>
		</div>
	);
}

export default CreateLesson;