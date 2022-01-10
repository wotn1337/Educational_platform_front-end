import React from 'react';
import s from './TagsList.module.css';
import Preloader from "../../common/Preloader/Preloader";


const TagsList = (props) => {
	const tags = props.allTags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
			onClick={() => {
				props.addTag(tag);
				props.externalAddTag(tag);
			}}
		>
			{tag.value}
		</div>
	});

	return (
		<div className={s.tagsList}>
			{props.isFetching
				? <Preloader size={50}/>
				: tags
			}
		</div>
	);
};

export default TagsList;