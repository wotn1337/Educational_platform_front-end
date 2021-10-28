import React from "react";
import s from './SearchBlock.module.css'
import {connect} from "react-redux";
import {getFragments, setSearchTitle, setSearchType} from "../../../redux/myFragmentsReducer";

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
	const searchFragments = () => {
		props.getFragments(
			props.token,
			1,
			props.searchTitle,
			props.searchType
		);
	}


	return (
		<div className={s.searchBlock}>
			<div className={s.title}>
				{/*Всего {props.filterFragmentsCount} фрагментов <span className={s.totalCount}>из {props.totalFragmentsCount}</span>*/}
				Всего {props.totalFragmentsCount} {rightWord(props.totalFragmentsCount)}
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
					<option value="test">Тест</option>
				</select>
				<button onClick={searchFragments} className={s.searchButton}/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	searchTitle: state.myFragments.searchTitle,
	searchType: state.myFragments.searchType,
	totalFragmentsCount: state.myFragments.totalFragmentsCount
})


export default connect(mapStateToProps, {
	getFragments,
	setSearchTitle,
	setSearchType
})(SearchBlock);