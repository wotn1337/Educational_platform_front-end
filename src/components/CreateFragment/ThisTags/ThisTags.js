import React from 'react';
import s from "../CreateFragment.module.css";
import cross from '../../../assets/img/fragments/cross_white.png';


const ThisTags = ({tags, edit, deleteTag, returnTag, ...props}) => {
	const thisTags = tags?.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
		>
			{tag.value}
			{edit &&
			<img
				src={cross}
				alt="cross"
				className={s.cross}
				onClick={() => {
					deleteTag(tag);
					returnTag(tag);
				}}
			/>
			}
		</div>;
	});

	return (
		<div className={s.tags} id={'thisTags'}>
			{thisTags}
		</div>
	);
};

export default ThisTags;