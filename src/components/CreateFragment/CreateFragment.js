import React, {useState} from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {fragmentTypes} from "../../common/fragmentTypes";
import CreateTestContainer from "../CreateTest/CreateTestContainer";
import CreateVideo from "../CreateVideo/CreateVideo";
import CreateArticle from "../CreateArticle/CreateArticle";
import TagsList from "./TagsList/TagsList";
import {tags} from "../../common/tags";
import './TagsList/tagsColors.css';


const CreateFragment = (props) => {
	const [showTagsList, setShowTagsList] = useState(false);

	const tagsList = props.tags.map((tag, index) => {
		return <div className={`${s.tag} ${tag}`} key={index} onClick={() => props.deleteTag(tag)}>{tags[tag]}</div>;
	});

	return (
		<div className={s.content}>
			<SelectType/>
			<FragmentTitle/>
			{props.fragmentType === fragmentTypes.article &&
			<CreateArticle/>
			}
			{props.fragmentType === fragmentTypes.test &&
			<CreateTestContainer/>
			}
			{props.fragmentType === fragmentTypes.video &&
			<CreateVideo/>
			}
			{!!tagsList.length &&
			<div className={s.tags}>
				{tagsList}
			</div>
			}
			<div className={s.buttonsBlock}>
				<button
					className={`${s.btn} ${s.addTags}`}
					onClick={() => setShowTagsList(!showTagsList)}
				>
					Добавить теги
				</button>
				{showTagsList && <TagsList/>}
				<button
					className={s.btn}
					onClick={props.createFragment}
					disabled={props.isFetching}
				>
					Создать
				</button>
			</div>
		</div>
	);
}

export default CreateFragment;