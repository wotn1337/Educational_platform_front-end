import React, {useState} from "react";
import s from './Fragment.module.css'
import TextEditor from "../TextEditor/TextEditor";
import htmlToDraft from 'html-to-draftjs';
import {ContentState, convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import {fragmentTypes} from "../../common/fragmentTypes";
import ThisTags from "../CreateFragment/ThisTags/ThisTags";
import TagsListContainer from "../CreateFragment/TagsList/TagsListContainer";
import {NavLink} from "react-router-dom";

const Fragment = (props) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [showTags, setShowTags] = useState(false);

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
			<span className={s.author}>Автор: <NavLink className={s.creatorName} to={`/profile:${props.creatorId}`}>{props.creator}</NavLink></span>
			{props.type === fragmentTypes.article &&
			<>
				{!props.isEdit
					? <div className={s.fragmentBlock} dangerouslySetInnerHTML={{__html: props.content}}/>
					: <TextEditor editorState={editorState} setEditorState={setContent}/>
				}
			</>
			}
			{props.type === fragmentTypes.video &&
			<div className={s.fragmentBlock}>
				<video src={props.content} controls={'controls'} className={s.video}/>
			</div>
			}

			<ThisTags
				tags={props.tags}
				edit={props.isEdit}
				deleteTag={props.deleteTag}
				returnTag={props.returnTag}
			/>

			<div className={s.buttonsBlock}>
				{props.isEdit &&
				<button onClick={() => setShowTags(!showTags)} className={s.btn}>Добавить теги</button>}
				{(props.userId === props.creatorId || props.role === 'admin') &&
				<>
					{!props.isEdit
						? <button className={s.btn} onClick={() => {
							props.toggleIsEdit();
							convertToDraft();
						}}>Редактировать</button>
						: <button className={s.btn} onClick={props.editFragment}>Сохранить
							изменения</button>
					}
				</>
				}
				{!props.isEdit &&
				<>
					{(props.userId === props.creatorId || props.role === 'admin') &&
					<button className={`${s.btn} ${s.deleteButton}`} onClick={props.deleteFragment}>Удалить</button>
					}
					<button className={`${s.btn} ${s.addToFavorite}`}>
						Добавить в избранное
					</button>
				</>
				}
			</div>
			{showTags && <TagsListContainer externalAddTag={props.addTag} currentTags={props.tags}/>}
		</div>
	)
}


export default Fragment;