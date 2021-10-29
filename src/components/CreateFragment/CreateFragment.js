import React, {useState} from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {connect} from "react-redux";
import {fragmentTypes} from "../../common/fragmentTypes";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {createFragment, setContent} from "../../redux/createArticleReducer";
import Preloader from "../Preloader/Preloader";
import TextEditor from "../TextEditor/TextEditor";
import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import CreateTestContainer from "../CreateTest/CreateTestContainer";


const CreateFragment = (props) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const setContent = (editorState) => {
		setEditorState(editorState);
		props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	};

	const createFragment = () => {
		props.createFragment(props.token, props.fragmentType, props.title, props.content)
			.then(() => setEditorState(EditorState.createEmpty()));
	};

	if (props.isFetching) {
		return <Preloader size={600}/>;
	}

	return (
		<div className={s.content}>
			<SelectType/>
			<FragmentTitle/>
			{props.fragmentType === fragmentTypes.article &&
				<TextEditor editorState={editorState} setEditorState={setContent}/>
			}
			{props.fragmentType === fragmentTypes.test &&
				<CreateTestContainer />
			}
			<button className={s.createButton} onClick={createFragment} disabled={props.isFetching}>Создать</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	fragmentType: state.createFragment.fragmentType,
	title: state.createFragment.title,
	isFetching: state.createFragment.isFetching,
	content: state.createFragment.content,
});

export default compose(
	connect(mapStateToProps, {createFragment, setContent}),
	withoutAuthRedirectToAuthPage
)(CreateFragment);