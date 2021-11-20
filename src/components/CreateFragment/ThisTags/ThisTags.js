import React from 'react';
import s from "../CreateFragment.module.css";
import cross from '../../../assets/img/fragments/cross_white.png';


const ThisTags = (props) => {
	const thisTags = props.tags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
		>
			{tag.value}
			{props.edit &&
			<img
				src={cross}
				alt="cross"
				className={s.cross}
				onClick={() => {
					props.deleteTag(tag);
					props.returnTag(tag);
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