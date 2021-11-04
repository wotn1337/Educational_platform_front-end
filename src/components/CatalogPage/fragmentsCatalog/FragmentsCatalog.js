import React from 'react';
import s from "../../MyFragments/MyFragments.module.css";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";


const FragmentsCatalog = () => {
	return (
		<div className={s.content}>
			<SearchBlockContainer/>
			<FragmentsListContainer />
		</div>
	);
};

export default FragmentsCatalog;