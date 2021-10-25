import React from "react";
import s from './MyFragments.module.css';
import SearchBlock from "./SearchBlock/SearchBlock";
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";


const MyFragments = () => {
	return (
		<div className={s.content}>
			<SearchBlock fragments={1000} totalFragmentsCount={1000}/>
			<FragmentsListContainer />
		</div>
	);
};

export default MyFragments;