import React from "react";
import s from './CreateLesson.module.css';
import LessonTitle from "./LessonTitle/LessonTitle";
import ConstructorBlock from "./СonstructorBlock/СonstructorBlock";
import TagsListContainer from "../CreateFragment/TagsList/TagsListContainer";


const CreateLesson = (props) => {
	return (
		<div className={s.content}>
			<h1 className={'pageTitle'}>Создать урок</h1>
			<LessonTitle/>
			<ConstructorBlock
				fragments={props.lessonFragments}
				isFetching={props.isFetching}
			/>
			<div className={s.buttonsBlock}>
				<button className={s.createButton}>Добавить теги</button>
				<button className={s.createButton} onClick={props.createLesson}>Создать</button>
			</div>
			<TagsListContainer />
		</div>
	);
}

export default CreateLesson;