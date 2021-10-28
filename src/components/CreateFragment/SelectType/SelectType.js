import React from "react";
import {connect} from "react-redux";
import {changeFragmentType} from "../../../redux/createArticleReducer";
import s from './SelectType.module.css';


const SelectType = (props) => {
	return (
		<div className={s.selectTypeBlock}>
			<div className={s.title}>Выберите тип фрагмента: </div>
			<select
				name="type"
				value={props.fragmentType}
				onChange={(e) => props.changeFragmentType(e.target.value)}
				className={s.selectType}
			>
				<option value="none">Тип фрагмента</option>
				<option value="article">Статья</option>
				<option value="test">Тест</option>
				<option value="video">Видео</option>
			</select>
		</div>
	);
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType
});

export default connect(mapStateToProps, {changeFragmentType})(SelectType);