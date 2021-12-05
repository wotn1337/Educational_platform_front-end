import React from "react";
import s from './MyFragments.module.css';
import FragmentsListContainer from "./FragmentsList/FragmentsListContainer";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import SearchBlockContainer from "./SearchBlock/SearchBlockContainer";


const MyFragments = () => {
	return (
		<div className={s.content}>
			<h1 className={'pageTitle'}>Мои фрагменты</h1>
			<SearchBlockContainer page={'my-fragments'}/>
			<FragmentsListContainer page={'my-fragments'}/>
		</div>
	);
};

export default withoutAuthRedirectToAuthPage(MyFragments);