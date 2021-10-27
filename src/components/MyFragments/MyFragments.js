import React from "react";
import s from './MyFragments.module.css';
import SearchBlock from "./SearchBlock/SearchBlock";
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";


const MyFragments = () => {
	return (
		<div className={s.content}>
			<SearchBlock/>
			<FragmentsListContainer />
		</div>
	);
};

export default withoutAuthRedirectToAuthPage(MyFragments);