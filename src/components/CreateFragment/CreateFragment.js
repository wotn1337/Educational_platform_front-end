import React, {useState} from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {fragmentTypes} from "../../common/fragmentTypes";
import CreateTestContainer from "../CreateTest/CreateTestContainer";
import CreateVideo from "../CreateVideo/CreateVideo";
import CreateArticle from "../CreateArticle/CreateArticle";
import TagsListContainer from "./TagsList/TagsListContainer";
import ThisTags from "./ThisTags/ThisTags";


const CreateFragment = (props) => {
	const [showTagsList, setShowTagsList] = useState(false);

	return (
		<div className={s.content}>
			<h1 className={'pageTitle'}>Создать фрагмент</h1>
			<SelectType/>
			<FragmentTitle/>
			<div style={{marginBottom: '20px'}}>
				{props.fragmentType === fragmentTypes.article &&
				<CreateArticle/>
				}
				{props.fragmentType === fragmentTypes.test &&
				<CreateTestContainer/>
				}
				{props.fragmentType === fragmentTypes.video &&
				<CreateVideo/>
				}
			</div>
			{!!props.tags.length &&
			<ThisTags
				tags={props.tags}
				edit={true}
				returnTag={props.returnTag}
				deleteTag={props.deleteTag}
			/>
			}
			<div className={s.buttonsBlock}>
				<button
					className={`${s.btn} ${s.addTags}`}
					onClick={() => setShowTagsList(!showTagsList)}
				>
					Добавить теги
				</button>
				<button
					className={s.btn}
					onClick={props.createFragment}
					disabled={props.isFetching}
				>
					Создать
				</button>
			</div>
			{showTagsList && <TagsListContainer currentTags={props.tags} externalAddTag={props.addTag}/>}
		</div>
	);
}

export default CreateFragment;