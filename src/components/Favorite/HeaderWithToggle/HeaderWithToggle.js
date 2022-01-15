import React from 'react';
import s from './HeaderWithToggle.module.css';
import Toggle from "./Toggle/Toggle";


const HeaderWithToggle = ({title, type, toggle, page}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.titleBlock}>
				<h1 className={'pageTitle'}>{title}:</h1>
				<Toggle type={type} toggle={toggle} page={page}/>
			</div>
		</div>
	);
};

export default HeaderWithToggle;