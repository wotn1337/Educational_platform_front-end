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
				<NavLink className={s.navLink} exact to="/" activeClassName={s.active}>Главная</NavLink>
				<NavLink className={`${s.navLink}`} to="/catalog" activeClassName={s.active}>Каталог</NavLink>
				{props.isAuth && <NavLink className={`${s.navLink}`} to="/profile" activeClassName={s.active}>Мой профиль</NavLink>}
				{props.isAuth
					? <NavLink className={`${s.navLink}`} to="/auth" onClick={e => logout(e)}>Выйти</NavLink>
					: <NavLink className={`${s.navLink}`} to="/auth" activeClassName={s.active}>Войти</NavLink>
				}
			</nav>
		</div>

	);
};

export default Navbar;