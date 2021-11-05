import React from "react";
import s from './LessonTitle.module.css';
import {connect} from "react-redux";
import {changeFragmentTitle} from "../../../redux/createLessonReducer";

const LessonTitle = (props) => {
	return (
		<div className={s.fragmentTitleBlock}>
			<div className={s.preTitle}>Название вашего урока</div>
			<input
				type="text"
				name={'fragmentTitle'}
				className={s.fragmentTitle}
				value={props.title}
				onChange={e => props.changeFragmentTitle(e.target.value)}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	title: state.createLesson.title
});

export default connect(mapStateToProps, {changeFragmentTitle})(LessonTitle);