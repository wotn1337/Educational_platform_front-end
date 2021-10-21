import React from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {connect} from "react-redux";
import CreateArticle from "./CreateArticle/CreateArticle";


const CreateFragment = (props) => {
	return (
		<div className={s.content}>
			<SelectType/>
			<FragmentTitle fragmentType={props.fragmentType}/>
			{props.fragmentType === 'article' &&
				<CreateArticle />
			}
		</div>
	);
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType
});

export default connect(mapStateToProps, null)(CreateFragment);