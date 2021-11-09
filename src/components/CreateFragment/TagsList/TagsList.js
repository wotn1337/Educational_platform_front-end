import React from 'react';
import s from './TagsList.module.css';
import {tags} from "../../../common/tags";
import {addTag} from "../../../redux/createFragmentReducer";
import {connect} from "react-redux";
import './tagsColors.css';


const TagsList = (props) => {
	const defaultTags = [];
	for (let i = 0; i < Object.keys(tags).length; i++) {
		defaultTags.push(
			<div
				key={i}
				className={`${s.tag} ${Object.keys(tags)[i]}`}
				onClick={() => props.addTag(Object.keys(tags)[i])}
			>
				{tags[Object.keys(tags)[i]]}
			</div>
		);
	}
	return (
		<div className={s.tagsList}>{defaultTags}</div>
	);
};

export default connect(null, {addTag})(TagsList);