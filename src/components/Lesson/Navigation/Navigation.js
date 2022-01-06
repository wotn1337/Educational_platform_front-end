import React from 'react';
import s from './Navigation.module.css'
import {fragmentTypeImg} from "../../../common/fragmentsPreview";
import {russianFragmentTypes} from "../../../common/fragmentTypes";


const Navigation = ({fragments, setCurrentFragment, current}) => {
	const navLinks = fragments.map(fragment => (
		<div
			key={fragment.id}
			className={`${s.fragmentLink} ${current?.id === fragment.id ? s.active : ''}`}
			onClick={() => setCurrentFragment(fragment.order - 1)}
		>
			<div className={s.fragmentTypeImg}><img src={fragmentTypeImg[fragment.type]} alt='type'/></div>
			<span className={s.fragmentTitle}>{fragment.title}</span>
			<span className={s.fragmentType}>{russianFragmentTypes[fragment.type]}</span>
		</div>
	));

	return (
		<nav className={s.navigation}>
			<div
				onClick={() => setCurrentFragment(-1)}
				className={`${s.description} ${current ? '' : s.active}`}
			>
				Описание урока
			</div>
			{navLinks}
		</nav>
	);
};

export default Navigation;