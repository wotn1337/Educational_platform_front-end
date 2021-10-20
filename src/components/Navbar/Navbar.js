import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import logo from '../../Stylesheets/logo.svg';
import DropDownMenu from "./DropDownMenu/DropDownMenu";


const Navbar = (props) => {
	const logout = (e) => {
		e.preventDefault();
		props.logout();
	};

	return (
		<div className={s.nav}>
			<div className={s.headerWrapper}>
				<img src={logo} alt="Logo" className={s.logo}/>
				<NavLink className={s.navLink} exact to="/" activeClassName={s.active}>Главная</NavLink>
				<NavLink className={s.navLink} to="/catalog" activeClassName={s.active}>Каталог</NavLink>
				{props.isAuth
					? <>
						<DropDownMenu/>
						<NavLink className={s.navLink} to="/profile" activeClassName={s.active}>Мой профиль</NavLink>
						<NavLink className={s.navLink} to="/auth" onClick={e => logout(e)}>Выйти</NavLink>
					</>
					: <NavLink className={s.navLink} to="/auth" activeClassName={s.active}>Войти</NavLink>
				}
			</div>
		</div>
	);
};

export default Navbar;