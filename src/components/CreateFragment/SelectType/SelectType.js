import React from "react";
import {connect} from "react-redux";
import {changeFragmentType} from "../../../redux/createFragmentReducer";


const SelectType = (props) => {
	return (
		<div>
			<div>Выберите тип фрагмента</div>
			<select name="type" value={props.fragmentType} onChange={(e) => props.changeFragmentType(e.target.value)}>
				<option value="none">Тип фрагмента</option>
				<option value="article">Статья</option>
				<option value="test">Тест</option>
				<option value="Video">Видео</option>
			</select>
		</div>
	);
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType
});

export default connect(mapStateToProps, {changeFragmentType})(SelectType);