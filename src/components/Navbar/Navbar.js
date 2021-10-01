import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'


const Navbar = (props) => {
	return (
		// nav nav-pills nav-justified
		// nav-link
		<nav className={`${s.nav}`}>
			<NavLink className={`${s.navLink}`} to="/">Каталог</NavLink>
			<NavLink className={`${s.navLink}`} to="/about">О проекте</NavLink>
			<NavLink className={`${s.navLink} ${s.sideNavLink}`} to="/auth">
				{props.loggedIn ? 'Выйти' : 'Войти'}
			</NavLink>
		</nav>
	);
};

export default Navbar;