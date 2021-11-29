import React, {useState} from 'react';
import s from './LessonSearchBlock.module.css';
import Input from "../../../../common/Input/Input";
import ThisTags from "../../../CreateFragment/ThisTags/ThisTags";
import TagsListContainer from "../../../CreateFragment/TagsList/TagsListContainer";


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
	const [tagsList, setTagsList] = useState(false);

	return (
		<div className={s.search}>
			<span className={s.count}>
				Всего {props.lessonsCount} {rightWord(props.lessonsCount)} <span className={s.total}>из {props.allLessonsCount}</span>
			</span>
			<div className={s.inputBlock}>
				<Input placeholder={'Название урока'} value={searchLessonTitle} onChange={changeSearchLessonTitle} style={{marginRight: '35px'}}/>
				<Input placeholder={'Имя преподавателя'} value={searchTeacherName} onChange={changeSearchTeacherName}/>
				<button className={s.searchButton} onClick={() => {
					setTagsList(false);
					search();
				}}/>
			</div>
			<div className={s.searchTags}>
				<ThisTags tags={props.searchTags} edit={true} returnTag={props.returnTag} deleteTag={props.deleteSearchTag}/>
				<button className={s.addTagButton} onClick={() => setTagsList(!tagsList)}>+</button>
				{tagsList && <TagsListContainer currentTags={props.searchTags} externalAddTag={props.addSearchTag}/>}
			</div>
		</div>
	);
};

export default LessonSearchBlock;