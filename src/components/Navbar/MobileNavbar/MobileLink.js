import React from 'react';
import s from './MobileNavbar.module.css';
import {NavLink} from "react-router-dom";


const MobileLink = ({to, setShowMenu, icon, title}) => {
	return (
		<NavLink
			exact to={to}
			className={s.navItem}
			activeClassName={s.active}
			onClick={() => setShowMenu(false)}
		>
			<img src={icon} alt="icon" className={s.navImg}/>
			<span className={s.navName}>{title}</span>
		</NavLink>
	);
};

export default MobileLink;