import React from "react";
import TextEditor from "../../TextEditor/TextEditor";


const CreateArticle = (props) => {
	return (
		<TextEditor editorState={props.editorState} setEditorState={props.setEditorState}/>
	);
}

export default CreateArticle;