import React from "react";
import s from './FragmentTitle.module.css';
import {connect} from "react-redux";
import {changeFragmentTitle} from "../../../redux/createFragmentReducer";


const rightWords = (fragment) => {
	switch (fragment) {
		case 'article':
			return 'вашей статьи';
		case 'image':
			return 'вашего изображения';
		case 'video':
			return 'вашего видеоролика';
		case 'lesson':
			return 'вашего урока';
		case 'game':
			return 'вашей игры';

		default:
			return '';
	}
}

const FragmentTitle = ({errors, ...props}) => {
	const errorsTags = errors?.map(error => <p className='inputError'>{error}</p>);
	return (
		<div className={s.fragmentTitleBlock}>
			<div className={s.preTitle}>Название {rightWords(props.fragmentType)}</div>
			<input
				type="text"
				name={'fragmentTitle'}
				className={s.fragmentTitle}
				value={props.title}
				onChange={e => props.changeFragmentTitle(e.target.value)}
			/>
			{errorsTags}
		</div>
	);
};

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType,
	title: state.createFragment.title,
	errors: state.createFragment.errors?.title
});

export default connect(mapStateToProps, {changeFragmentTitle})(FragmentTitle);