import React from "react";
import s from './MyFragments.module.css';
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";


const MyFragments = () => {
	return (
		<div className={s.content}>
			<h1>Мои фрагменты</h1>
			<SearchBlockContainer/>
			<FragmentsListContainer />
		</div>
	);
};

export default withoutAuthRedirectToAuthPage(MyFragments);