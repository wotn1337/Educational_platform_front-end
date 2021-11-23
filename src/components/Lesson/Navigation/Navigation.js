import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {fragmentTypeImg} from "../../../common/fragmentsPreview";
import {russianFragmentTypes} from "../../../common/fragmentTypes";


const Navigation = ({lessonId, fragments, changeFragment, ...props}) => {
	const navLinks = fragments.map(fragment => (
		<NavLink
			to={`/lesson/${lessonId}/${fragment.pivot.fragment_id}`}
			key={fragment.pivot.fragment_id}
			className={s.fragmentLink}
			onClick={() => changeFragment(fragment.pivot.order)}
			activeClassName={s.activeFragment}
		>
			<div className={s.fragmentTypeImg}><img src={fragmentTypeImg[fragment.fragmentgable_type]} alt='type'/></div>
			<span className={s.fragmentTitle}>{fragment.title}</span>
			<span className={s.fragmentType}>{russianFragmentTypes[fragment.fragmentgable_type]}</span>
		</NavLink>
	));

	return (
		<nav className={s.navigation}>{navLinks}</nav>
	);
};

export default Navigation;