import React from "react";
import s from './CreateFragment.module.css';
import SelectType from "./SelectType/SelectType";
import FragmentTitle from "./FragmentTitle/FragmentTitle";
import {fragmentTypes} from "../../common/fragmentTypes";
import CreateTestContainer from "../CreateTest/CreateTestContainer";
import CreateVideo from "../CreateVideo/CreateVideo";
import CreateArticle from "../CreateArticle/CreateArticle";


const CreateFragment = (props) => {
	return (
		<div className={s.content}>
			<SelectType/>
			<FragmentTitle/>
			{props.fragmentType === fragmentTypes.article &&
			<CreateArticle />
			}
			{props.fragmentType === fragmentTypes.test &&
			<CreateTestContainer/>
			}
			{props.fragmentType === fragmentTypes.video &&
			<CreateVideo/>
			}
			<button className={s.createButton} onClick={props.createFragment} disabled={props.isFetching}>Создать
			</button>
		</div>
	);
}

export default CreateFragment;