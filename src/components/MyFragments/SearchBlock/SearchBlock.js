import React from "react";
import s from './SearchBlock.module.css'
import TagsListContainer from "../../CreateFragment/TagsList/TagsListContainer";
import ThisTags from "../../CreateFragment/ThisTags/ThisTags";
import AgeLimits from "../../CreateFragment/AgeLimits/AgeLimits";

const rightWord = (count) => {
	const twoLastNumbers = count % 100;
	const lastNumber = count % 10;

	if (lastNumber === 1 && twoLastNumbers !== 11)
		return "фрагмент";
	else if (lastNumber >= 2 && lastNumber <= 4 && twoLastNumbers !== 12 && twoLastNumbers !== 13 && twoLastNumbers !== 14)
		return "фрагмента";
	else return "фрагментов";
}


const SearchBlock = (props) => {
	return (
		<div className={s.searchBlock}>
			<div className={s.title}>
				Всего {props.currentFragmentsCount} {rightWord(props.currentFragmentsCount)} <span className={s.total}>из {props.totalFragmentsCount}</span>
			</div>
			<div className={s.inputBlock}>
				<input
					type="text"
					placeholder={'Поиск'}
					className={s.searchInput}
					value={props.searchTitle}
					onChange={e => props.setSearchTitle(e.target.value)}
				/>
				<select
					name="type"
					id="type"
					className={s.typeSelect}
					value={props.searchType}
					onChange={e => props.setSearchType(e.target.value)}
				>
					<option value={''}>Все фрагменты</option>
					<option value="article">Статья</option>
					<option value="video">Видео</option>
					<option value="image">Изображение</option>
					<option value="game">Игра</option>
				</select>
				<AgeLimits ageLimitId={props.ageLimitId} setAgeLimit={props.setAgeLimit} search={true}/>
				<TagsListContainer currentTags={props.searchTags} externalAddTag={props.addSearchTag}>
					<button className={s.addTagButton}>+</button>
				</TagsListContainer>
				<button onClick={props.searchFragments} className={s.searchButton}>Искать</button>
			</div>
			<div className={s.searchTags}>
				<ThisTags tags={props.searchTags} edit={true} returnTag={props.returnTag} deleteTag={props.deleteSearchTag}/>
			</div>
		</div>
	);
}


export default SearchBlock;