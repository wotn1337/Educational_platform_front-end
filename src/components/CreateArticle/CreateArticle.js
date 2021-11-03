import React, {useState} from 'react';
import {convertToRaw, EditorState} from "draft-js";
import TextEditor from "../TextEditor/TextEditor";
import draftToHtml from "draftjs-to-html";
import {setContent} from "../../redux/createFragmentReducer";
import {connect} from "react-redux";


const CreateArticle = (props) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const setArticleContent = (editorState) => {
		setEditorState(editorState);
		props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	};
	return (
		<TextEditor editorState={editorState} setEditorState={setArticleContent}/>
	);
};


export default connect(null, {setContent})(CreateArticle);