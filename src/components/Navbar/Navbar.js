import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import logo from '../../assets/img/navbar/logo.svg';
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import MobileNavbar from "./MobileNavbar/MobileNavbar";


const Navbar = ({role, ...props}) => {
	const logout = (e) => {
		e.preventDefault();
		props.logout();
	};

	return (
		<div className={s.nav}>
			<div className={s.headerWrapper}>
				<NavLink to={'/'} className={s.logoLink}><img src={logo} alt="Logo" className={s.logo}/></NavLink>
				<NavLink className={s.navLink} exact to="/" activeClassName={s.active}>Главная</NavLink>
				{props.isAuth
					? <>
						<NavLink className={s.navLink} to="/teachers" activeClassName={s.active}>Преподаватели</NavLink>
						{role !== 'admin'
							? <>
								<DropDownMenu
									title={'Учебные материалы'}
									links={[{'catalog': 'Каталог'}, {'my-materials': role !== 'student' ? 'Мои материалы' : 'Мои уроки'}, {'favorites': 'Избранное'}]}
								/>
								{role !== 'student'
									? <DropDownMenu
										title={'Создать'}
										links={[{'create-fragment': 'Создать фрагмент'}, {'create-lesson': 'Создать урок'}]}
									/>
									: <NavLink className={s.navLink} to="/create-lesson" activeClassName={s.active}>Создать
										урок</NavLink>
								}

							</>
							: <NavLink className={s.navLink} to="/catalog" activeClassName={s.active}>Каталог</NavLink>
						}
						<NavLink className={s.navLink} to="/me" activeClassName={s.active}>Мой профиль</NavLink>
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