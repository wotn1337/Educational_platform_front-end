import React from 'react';
import s from './TagsList.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import Tippy from "@tippyjs/react";


const TagsList = ({children, addTag, externalAddTag, isFetching, ...props}) => {
	const tags = props.allTags.map(tag => {
		return <div
			className={s.tag}
			key={tag.id}
			id={tag.id}
			onClick={() => {
				addTag(tag);
				externalAddTag(tag);
			}}
		>
			{tag.value}
		</div>
	});

	return (
		<Tippy
			content={<div className={s.tagsList}>{isFetching ? <Preloader size={50}/> : tags}</div>}
			trigger='click'
			interactive={true}
			placement="right-start"
			delay={0}
			duration={0}
		>
			{children}
		</Tippy>
	);
};

export default TagsList;