import React from 'react';
import s from '../Navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../../assets/img/navbar/logo.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";


const DesktopNavbar = ({role, isAuth, isAdmin, logout}) => {
	return (
        <div className={s.headerWrapper}>
            <NavLink to={'/'} className={s.logoLink}><img src={logo} alt="Logo" className={s.logo}/></NavLink>
            <NavLink className={s.navLink} exact to="/" activeClassName={s.active}>Главная</NavLink>
            {isAuth
                ? <>
                    <NavLink className={s.navLink} to="/teachers" activeClassName={s.active}>Преподаватели</NavLink>
                    {!isAdmin
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
                    <div className={s.navLink} onClick={logout}>Выйти</div>
                </>
                : <NavLink className={s.navLink} to={'/login'} activeClassName={s.active}>Войти</NavLink>
            }
        </div>
	);
};

export default DesktopNavbar;