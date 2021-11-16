import React from 'react';
import s from "../FragmentCard.module.css";
import uuid from "draft-js";

//Возвращает массив из трех первых тегов пришедших в функцию
const getFirstThreeTags = (tags) => {
	const result = [];
	const len = tags.length > 3 ? 3 : tags.length;
	for (let i = 0; i < len; i++) {
		result.push(<div className={s.tag} key={tags[i].id}>{tags[i].value}</div>)
	}
	if (tags.length > 3) {
		result.push(getLastTagWithTagsCount(tags));
	}
	return result;
}

//Возвращает тег с оставшимся кол-вом тегов (без учета первых трех)
const getLastTagWithTagsCount = (tags) => {
	return (
		<div className={`${s.tag} ${s.lastTag}`} key={uuid}>+ {tags.length - 3}</div>
	);
}


const Tags = (props) => {
	const tags = props.tags
		? getFirstThreeTags(props.tags.data)
		: undefined;

	return (<div className={s.tags}>{tags}</div>);
};

export default Tags;