import React from "react";
import s from './MyFragments.module.css';
import SearchBlock from "./SearchBlock/SearchBlock";


const MyFragments = () => {
	return (
		<div className={s.content}>
			<h1>Мои фрагменты</h1>
			<SearchBlock fragments={1000} totalFragmentsCount={1000}/>
		</div>
	);
};

export default MyFragments;