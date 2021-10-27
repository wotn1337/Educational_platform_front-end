import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import s from './TextEditor.module.css';


class TextEditor extends React.Component {
	onEditorStateChange = (editorState) => {
		this.props.setEditorState(editorState);
	};

	render() {
		return (
			<Editor
				editorState={this.props.editorState}
				toolbarClassName={s.toolbar}
				wrapperClassName="wrapperClassName"
				editorClassName={s.textEditor}
				onEditorStateChange={this.onEditorStateChange}
			/>
		);
	}
}


export default TextEditor;