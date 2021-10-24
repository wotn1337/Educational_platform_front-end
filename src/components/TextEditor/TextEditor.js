import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import s from './TextEditor.module.css';


const TextEditor = (props) => {
	return (
		<Editor
			editorState={props.editorState}
			toolbarClassName={s.toolbar}
			wrapperClassName="wrapperClassName"
			editorClassName={s.textEditor}
			onEditorStateChange={props.setEditorState}
		/>
	);
}

export default TextEditor;