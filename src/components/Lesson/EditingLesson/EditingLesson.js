import React, {useState} from 'react';
import LessonTitle from "../../CreateLesson/LessonTitle/LessonTitle";
import LessonAnnotation from "../../CreateLesson/LessonAnnotation/LessonAnnotation";
import ConstructorBlock from "../../CreateLesson/СonstructorBlock/СonstructorBlock";
import ThisTags from "../../CreateFragment/ThisTags/ThisTags";
import s from '../Lesson.module.css';
import TagsListContainer from "../../CreateFragment/TagsList/TagsListContainer";


const EditingLesson = ({title, changeTitle, annotation, changeAnnotation, fragments, ...props}) => {
	const [tags, setTags] = useState(false);
	return (
		<>
			<LessonTitle title={title} changeLessonTitle={changeTitle}/>
			<LessonAnnotation annotation={annotation} changeAnnotation={changeAnnotation}/>
			<ConstructorBlock fragments={fragments} setFragments={props.setFragments}/>
			<ThisTags tags={props.tags} edit={true} deleteTag={props.deleteTag} returnTag={props.returnTag}/>
			<div className={s.buttonsBlock}>
				<button className={'btn'} onClick={() => setTags(!tags)} disabled={props.isFetching}>Добавить теги</button>
				<button className={'btn'}  disabled={props.isFetching} onClick={() => {
					props.updateLesson()
						.then(() => props.toggleIsEdit());
				}}>Сохранить изменения</button>
			</div>
			{tags && <TagsListContainer currentTags={props.tags} externalAddTag={props.addTag}/>}
		</>
	);
};

export default EditingLesson;