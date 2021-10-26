import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import s from './TextEditor.module.css';
import {EditorState} from "draft-js";
import {setContent} from "../../redux/createFragmentReducer";
import {connect} from "react-redux";
import draftToHtml from "draftjs-to-html";
import {convertToRaw} from "draft-js";


class TextEditor extends React.Component {
	state = {
		editorState: EditorState.createEmpty(),
	}

	onEditorStateChange = (editorState) => {
		this.setState({editorState});
		// console.log(editorState);
		// console.log(editorState.getCurrentContent());
		// console.log(convertToRaw(editorState.getCurrentContent()));
		//console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
		//console.log(this.props.content);
		this.props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
	};

	render() {
		return (
			<Editor
				editorState={this.state.editorState}
				toolbarClassName={s.toolbar}
				wrapperClassName="wrapperClassName"
				editorClassName={s.textEditor}
				onEditorStateChange={this.onEditorStateChange}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	content: state.createFragment.content
});

export default connect(mapStateToProps, {setContent})(TextEditor);