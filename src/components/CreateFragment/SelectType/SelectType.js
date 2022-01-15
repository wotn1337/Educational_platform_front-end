import React from "react";
import {connect} from "react-redux";
import s from './SelectType.module.css';
import {changeFragmentType, setContent} from "../../../redux/createFragmentReducer";


const SelectType = (props) => {
	return (
		<div className={s.selectTypeBlock}>
			<div className={s.title}>Выберите тип фрагмента: </div>
			<select
				name="type"
				value={props.fragmentType}
				onChange={(e) => {
					props.changeFragmentType(e.target.value);
					props.setContent(undefined);
				}}
				className={s.selectType}
			>
				<option value="">Тип фрагмента</option>
				<option value="article">Статья</option>
				<option value="image">Изображение</option>
				<option value="video">Видео</option>
			</select>
		</div>
	);
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType
});

export default connect(mapStateToProps, {changeFragmentType, setContent})(SelectType);