import React, {useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import s from './TextEditor.module.css';


const TextEditor = () => {
	const [editorState, setEditorState] = useState(null);
	return (
		<Editor
			editorState={editorState}
			toolbarClassName={s.toolbar}
			wrapperClassName="wrapperClassName"
			editorClassName={s.textEditor}
			onEditorStateChange={setEditorState}
		/>
	);
}

export default TextEditor;