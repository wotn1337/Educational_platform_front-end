import React, {useEffect, useState} from 'react';
import s from "./MobileNavbar.module.css";
import logo from "../../../assets/img/navbar/logo.svg";
import {NavLink} from "react-router-dom";
import userImg from "../../../assets/img/navbar/mobileProfile.svg";
import arrow from "../../../assets/img/navbar/arrow.svg";
import catalog from '../../../assets/img/navbar/catalog.svg';
import main from '../../../assets/img/navbar/main.svg';
import myMaterials from '../../../assets/img/navbar/myLessons.svg';
import favorite from '../../../assets/img/navbar/favorite.svg';
import createFragment from '../../../assets/img/navbar/myFragments.svg';
import createLesson from '../../../assets/img/navbar/createLesson.svg';
import exit from '../../../assets/img/navbar/logout.svg';
import MobileLink from "./MobileLink";


const MobileNavbar = ({isAdmin, role, logout, isAuth, ...props}) => {
	const [showMenu, setShowMenu] = useState(false);
	const [avatar, setAvatar] = useState(undefined);
	const [userName, setUserName] = useState('Профиль');
	useEffect(() => {
		props.getProfile();
		setAvatar(props.avatar);
		setUserName(props.userName);
	}, [props]);
	return (
		<div className={`${s.mobileMenu} ${showMenu ? s.activeMobileMenu : ''}`}>
			<img src={logo} alt="Logo" className={s.logo}/>
			<button className={s.burgerMenuButton} onClick={() => setShowMenu(!showMenu)}/>
			<div className={`${s.mobileNavWrapper} ${showMenu ? s.shownMenu : ''}`} onClick={() => setShowMenu(false)}>
				<div className={s.mobileNav} onClick={e => e.stopPropagation()}>
					<NavLink
						to={'/me'}
						className={s.profileInfo}
						activeClassName={s.activeProfile}
						onClick={() => setShowMenu(!showMenu)}
					>
						<img src={(isAuth ? avatar : false) || userImg} alt="user" className={s.userAvatar}/>
						<span className={s.userName}>{isAuth ? userName : 'Войти'}</span>
						<img src={arrow} alt="arrow" className={s.arrow}/>
					</NavLink>
					<nav className={s.menu}>
						<MobileLink to={'/'} setShowMenu={setShowMenu} title={'Главная'} icon={main}/>
						{isAuth &&
						<>
							<MobileLink to={'/teachers'} setShowMenu={setShowMenu} title={'Преподаватели'} icon={userImg}/>
							<MobileLink to={'/catalog'} setShowMenu={setShowMenu} title={'Каталог'} icon={catalog}/>
							{!isAdmin &&
								<>
									<MobileLink to={'/my-materials'} setShowMenu={setShowMenu}
									            title={role === 'creator' ? 'Мои материалы' : 'Мои уроки'}
									            icon={myMaterials}/>

									<MobileLink to={'/favorites'} setShowMenu={setShowMenu} title={'Избранное'}
									            icon={favorite}/>
									{role !== 'student' &&
										<MobileLink to={'/create-fragment'} setShowMenu={setShowMenu}
										            title={'Создать фрагмент'}
										            icon={createFragment}/>
									}
									<MobileLink to={'/create-lesson'} setShowMenu={setShowMenu} title={'Создать урок'}
									            icon={createLesson}/>
								</>
							}
							<div className={s.exitButton} onClick={logout}>
								<img src={exit} alt="logout" className={s.navImg}/>
								<span>Выйти</span>
							</div>
						</>
						}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;