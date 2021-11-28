import React, {useState} from "react";
import s from './CreateLesson.module.css';
import LessonTitle from "./LessonTitle/LessonTitle";
import ConstructorBlock from "./СonstructorBlock/СonstructorBlock";
import TagsListContainer from "../CreateFragment/TagsList/TagsListContainer";
import ThisTags from "../CreateFragment/ThisTags/ThisTags";
import LessonAnnotation from "./LessonAnnotation/LessonAnnotation";
import Preloader from "../../common/Preloader/Preloader";


const CreateLesson = ({isFetching, ...props}) => {
	const [tags, setTags] = useState(false);
	return (
		<div className={s.content}>
			<h1 className={'pageTitle'}>Создать урок</h1>
			<LessonTitle title={props.title} changeLessonTitle={props.changeLessonTitle}/>
			<LessonAnnotation annotation={props.annotation} changeAnnotation={props.changeAnnotation}/>
			{isFetching
				? <Preloader size={200}/>
				: <>
					<ConstructorBlock fragments={props.lessonFragments} setFragments={props.setFragments}/>
					<ThisTags
						tags={props.tags}
						edit={true}
						returnTag={props.returnTag}
						deleteTag={props.deleteTag}
					/>
				</>
			}
			<div className={s.buttonsBlock}>
				<button className={'btn'} onClick={() => setTags(!tags)}>Добавить теги</button>
				<button className={'btn'} onClick={props.createLesson}
				        disabled={props.annotation.length > 255 || props.title.length === 0 || props.lessonFragments.length === 0}>Создать</button>
			</div>
			{tags && <TagsListContainer currentTags={props.tags} externalAddTag={props.addTag}/>}
		</div>
	);
}

export default CreateLesson;