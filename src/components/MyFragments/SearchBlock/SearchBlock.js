import React from "react";
import s from './SearchBlock.module.css'
import {connect} from "react-redux";
import {getFragments, setSearchTitle, setSearchType} from "../../../redux/myFragmentsReducer";


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
				Всего {props.filterFragmentsCount} фрагментов <span className={s.totalCount}>из {props.totalFragmentsCount}</span>
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
	totalFragmentsCount: state.myFragments.totalFragmentsCount,
	filterFragmentsCount: state.myFragments.filterFragmentsCount
})


export default connect(mapStateToProps, {
	getFragments,
	setSearchTitle,
	setSearchType
})(SearchBlock);