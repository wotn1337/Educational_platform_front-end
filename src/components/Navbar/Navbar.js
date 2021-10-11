import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'


const Navbar = (props) => {
	const logout = (e) => {
		e.preventDefault();
		props.logout();
	};

	return (
		// nav nav-pills nav-justified
		// nav-link
		<div className={s.header}>
			{/*<img src={logo} alt="logo" height='30'/>*/}
			<nav className={`${s.nav}`}>
				<NavLink className={s.navLink} to="/">Главная</NavLink>
				<NavLink className={`${s.navLink}`} to="/catalog">Каталог</NavLink>
				{props.isAuth && <NavLink className={`${s.navLink}`} to="/profile">Мой профиль</NavLink>}
				{props.isAuth
					? <NavLink className={`${s.navLink}`} to="/auth" onClick={e => logout(e)}>Выйти</NavLink>
					: <NavLink className={`${s.navLink}`} to="/auth">Войти</NavLink>
				}
			</nav>
		</div>

	);
};

export default Navbar;