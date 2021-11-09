import React from 'react';
import s from './TagsList.module.css';
import {addTag} from "../../../redux/createFragmentReducer";
import {connect} from "react-redux";
import Preloader from "../../Preloader/Preloader";


const TagsList = (props) => {
	const tags = props.allTags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
			onClick={() => props.addTag(tag)}
		>
			{tag.value}
		</div>
	});

	return (
		<div className={s.tagsList}>
			{props.tagsFetching
				? <Preloader size={50}/>
				: tags
			}
		</div>
	);
};

export default connect(null, {addTag})(TagsList);