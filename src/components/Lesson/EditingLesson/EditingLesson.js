import React from 'react';
import LessonTitle from "../../CreateLesson/LessonTitle/LessonTitle";
import LessonAnnotation from "../../CreateLesson/LessonAnnotation/LessonAnnotation";
import ConstructorBlock from "../../CreateLesson/СonstructorBlock/СonstructorBlock";
import ThisTags from "../../CreateFragment/ThisTags/ThisTags";
import s from '../Lesson.module.css';
import TagsListContainer from "../../CreateFragment/TagsList/TagsListContainer";
import UploadFon from "../../CreateLesson/UloadFon/UploadFon";
import AgeLimits from "../../CreateFragment/AgeLimits/AgeLimits";


const EditingLesson = ({title, changeTitle, annotation, changeAnnotation, fragments, ...props}) => {
	return (
		<>
			<LessonTitle title={title} changeLessonTitle={changeTitle}/>
			<UploadFon fon={props.fon} setFon={props.setFon} type={'lesson'}/>
			<LessonAnnotation annotation={annotation} changeAnnotation={changeAnnotation}/>
			<ConstructorBlock fragments={fragments} setFragments={props.setFragments} deleteFragment={props.deleteFragment}/>
			<div style={{marginBottom: "20px"}}>
				<AgeLimits ageLimitId={props.ageLimitId} setAgeLimit={props.setAgeLimit}/>
			</div>
			<ThisTags tags={props.tags} edit={true} deleteTag={props.deleteTag} returnTag={props.returnTag}/>
			<div className={s.buttonsBlock}>
				<TagsListContainer currentTags={props.tags} externalAddTag={props.addTag}>
					<button className={'btn'}>Добавить теги</button>
				</TagsListContainer>
				<button className={'btn'}  disabled={props.isFetching} onClick={() => {
					props.updateLesson()
						.then(() => props.toggleIsEdit());
				}}>Сохранить изменения</button>
			</div>
		</>
	);
};

export default EditingLesson;