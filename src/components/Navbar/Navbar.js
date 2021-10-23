import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import logo from '../../assets/img/logo.svg';
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
						<DropDownMenu
							title={'Мои материалы'}
							links={[{'my-fragments': 'Мои фрагменты'}, {'my-lessons': 'Мои уроки'}, {'favorites': 'Избранное'}]}
						/>
						<DropDownMenu
							title={'Создать'}
							links={[props.role !== 'student' && {'create-fragment': 'Создать фрагмент'}, {'create-lesson': 'Создать урок'}]}
						/>
						<NavLink className={s.navLink} to="/profile" activeClassName={s.active}>Мой профиль</NavLink>
						<NavLink className={s.navLink} to="/auth" onClick={e => logout(e)}>Выйти</NavLink>
					</>
					: <NavLink className={s.navLink} to={'/login'} activeClassName={s.active}>Войти</NavLink>
				}
			</div>
		</div>
	);
};

export default Navbar;