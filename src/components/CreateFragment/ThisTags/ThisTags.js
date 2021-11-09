import React from 'react';
import s from "../CreateFragment.module.css";


const ThisTags = (props) => {
	const thisTags = props.tags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
			onClick={!props.disabled && (() => props.deleteTag(tag))}
			style={{cursor: `${props.disabled ? 'default' : 'pointer'}`}}
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