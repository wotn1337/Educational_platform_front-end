import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import logo from '../../assets/img/navbar/logo.svg';
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MobileNavbar from "./MobileNavbar/MobileNavbar";


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
				{props.isAuth
					? <>
						<DropDownMenu
							title={'Каталог'}
							links={[{'catalog-fragments': 'Каталог фрагментов'}, {'lessons-catalog': 'Каталог уроков'}]}
						/>
						<DropDownMenu
							title={'Мои материалы'}
							links={[{'my-fragments': 'Мои фрагменты'}, {'my-lessons': 'Мои уроки'}, {'favorites': 'Избранное'}]}
						/>
						{props.role !== 'admin' &&
						<DropDownMenu
							title={'Создать'}
							links={[props.role !== 'student' && {'create-fragment': 'Создать фрагмент'}, {'create-lesson': 'Создать урок'}]}
						/>
						}
						<NavLink className={s.navLink} to="/profile/me" activeClassName={s.active}>Мой профиль</NavLink>
						<NavLink className={s.navLink} to="/auth" onClick={e => logout(e)}>Выйти</NavLink>
					</>
					: <NavLink className={s.navLink} to={'/login'} activeClassName={s.active}>Войти</NavLink>
				}
			</div>
			<MobileNavbar/>
		</div>
	);
};

export default Navbar;