import React from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {connect} from "react-redux";
import CreateArticle from "./CreateArticle/CreateArticle";
import {fragmentTypes} from "../../common/fragmentTypes";


const CreateFragment = (props) => {
	return (
		<div className={s.content}>
			<SelectType />
			<FragmentTitle />
			{props.fragmentType === fragmentTypes.article &&
				<CreateArticle />
			}
			<button className={s.createButton}>Создать</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType,
	title: state.createFragment.title
});

export default connect(mapStateToProps, null)(CreateFragment);