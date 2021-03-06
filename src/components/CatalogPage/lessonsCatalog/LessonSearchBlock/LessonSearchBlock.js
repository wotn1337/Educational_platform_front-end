import React from 'react';
import s from './LessonSearchBlock.module.css';
import Input from "../../../../common/Input/Input";
import ThisTags from "../../../CreateFragment/ThisTags/ThisTags";
import TagsListContainer from "../../../CreateFragment/TagsList/TagsListContainer";
import AgeLimits from "../../../CreateFragment/AgeLimits/AgeLimits";


const rightWord = (count) => {
	const twoLastNumbers = count % 100;
	const lastNumber = count % 10;

	if (lastNumber === 1 && twoLastNumbers !== 11)
		return "урок";
	else if (lastNumber >= 2 && lastNumber <= 4 && twoLastNumbers !== 12 && twoLastNumbers !== 13 && twoLastNumbers !== 14)
		return "урока";
	else return "уроков";
}

const LessonSearchBlock = ({searchLessonTitle, changeSearchLessonTitle, searchTeacherName, changeSearchTeacherName, search, ...props}) => {
	return (
		<div className={s.search}>
			<span className={s.count}>
				Всего {props.lessonsCount} {rightWord(props.lessonsCount)} <span
				className={s.total}>из {props.allLessonsCount}</span>
			</span>
			<div className={s.inputBlock}>
				<Input placeholder={'Название урока'} value={searchLessonTitle} onChange={changeSearchLessonTitle}/>
				<Input placeholder={'Имя преподавателя'} value={searchTeacherName} onChange={changeSearchTeacherName}/>
				<AgeLimits ageLimitId={props.ageLimitId} setAgeLimit={props.setAgeLimit} search={true}/>
				<TagsListContainer currentTags={props.searchTags} externalAddTag={props.addSearchTag}>
					<button className={s.addTagButton}>+</button>
				</TagsListContainer>
				<button className={s.searchButton} onClick={search}>Искать</button>
			</div>
			<div className={s.searchTags}>
				<ThisTags tags={props.searchTags} edit={true} returnTag={props.returnTag}
				          deleteTag={props.deleteSearchTag}/>
			</div>
		</div>
	);
};

export default LessonSearchBlock;