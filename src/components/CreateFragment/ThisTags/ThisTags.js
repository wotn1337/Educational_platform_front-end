import React from 'react';
import s from "../CreateFragment.module.css";


const ThisTags = (props) => {
	const thisTags = props.tags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
			onClick={props.edit ? (() => {
				props.deleteTag(tag);
				props.returnTag(tag);
			}) : undefined}
			style={{cursor: `${!props.edit ? 'default' : 'pointer'}`}}
		>
			{tag.value}
		</div>;
	});

	return (
		<div className={s.tags}>
			{thisTags}
		</div>
	);
};

export default ThisTags;