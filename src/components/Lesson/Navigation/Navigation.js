import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {fragmentTypeImg} from "../../../common/fragmentsPreview";
import {russianFragmentTypes} from "../../../common/fragmentTypes";


const Navigation = ({lessonId, fragments, setCurrentFragment, ...props}) => {
	const navLinks = fragments.map(fragment => (
		<NavLink
			to={`/lesson/${lessonId}/${fragment.id}`}
			key={fragment.id}
			className={s.fragmentLink}
			onClick={() => setCurrentFragment(fragment.order)}
			activeClassName={s.active}
		>
			<div className={s.fragmentTypeImg}><img src={fragmentTypeImg[fragment.type]} alt='type'/></div>
			<span className={s.fragmentTitle}>{fragment.title}</span>
			<span className={s.fragmentType}>{russianFragmentTypes[fragment.type]}</span>
		</NavLink>
	));

	return (
		<nav className={s.navigation}>
			<NavLink
				exact to={`/lesson/${lessonId}`}
				className={s.description}
				activeClassName={s.active}
			>
				Описание урока
			</NavLink>
			{navLinks}
		</nav>
	);
};

export default Navigation;