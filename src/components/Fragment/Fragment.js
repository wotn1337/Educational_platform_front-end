import React, {useState} from "react";
import s from './Fragment.module.css'
import TextEditor from "../TextEditor/TextEditor";
import htmlToDraft from 'html-to-draftjs';
import {ContentState, convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";

const Fragment = (props) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const setContent = (editorState) => {
		props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
		setEditorState(editorState);
	}

	const convertToDraft = () => {
		const contentBlock = htmlToDraft(props.content);
		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap);
		setEditorState(EditorState.createWithContent(contentState));
	}

	return (
		<div className={s.fragmentWrapper}>
			{!props.isEdit
				? <div className={s.name}>{props.title}</div>
				: <input
					type="text"
					name={'fragmentTitle'}
					className={s.fragmentTitle}
					value={props.title}
					onChange={event => props.setTitle(event.target.value)}
				/>
			}

			{!props.isEdit
				? <div className={s.fragmentBlock} dangerouslySetInnerHTML={{__html: props.content}}/>
				: <TextEditor editorState={editorState} setEditorState={setContent}/>
			}

			<div className={s.buttonsBlock}>
				{!props.isEdit
					? <button className={s.btn} onClick={() => {
						props.toggleIsEdit();
						convertToDraft();
					}}>Редактировать</button>
					: <button className={s.btn} onClick={() => props.editFragment(props.title, props.content)}>Сохранить
						изменения</button>
				}
				<button className={s.btn} onClick={props.deleteFragment}>
					Удалить
				</button>
				<button className={s.btn}>
					Добавить в избранное
				</button>
			</div>
		</div>
	)
}


export default Fragment;