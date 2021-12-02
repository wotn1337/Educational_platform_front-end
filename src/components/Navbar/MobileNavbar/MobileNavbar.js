import React, {useEffect, useState} from 'react';
import s from "./MobileNavbar.module.css";
import logo from "../../../assets/img/navbar/logo.svg";
import {NavLink} from "react-router-dom";
import userImg from "../../../assets/img/profile/user.svg";
import catalog from '../../../assets/img/navbar/catalog.svg';
import {getProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const MobileNavbar = (props) => {
	const [showMenu, setShowMenu] = useState(false);
	const [avatar, setAvatar] = useState(null);
	const [userName, setUserName] = useState('Профиль');
	useEffect(() => {
		props.getProfile(props.token);
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
						<img src={avatar || userImg} alt="user" className={s.userAvatar}/>
						<span className={s.userName}>{userName}</span>
					</NavLink>
					<nav className={s.menu}>
						<NavLink
							exact to={'/'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Главная</span>
						</NavLink>
						<NavLink
							to={'/lessons-catalog'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Каталог уроков</span>
						</NavLink>
						<NavLink
							to={'/catalog-fragments'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Каталог фрагментов</span>
						</NavLink>
						<NavLink
							to={'/my-lessons'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Мои уроки</span>
						</NavLink>
						<NavLink
							to={'/my-fragments'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Мои фрагменты</span>
						</NavLink>
						<NavLink
							to={'/favorites'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Избранное</span>
						</NavLink>
						<NavLink
							to={'/create-lesson'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Создать урок</span>
						</NavLink>
						<NavLink
							to={'/create-fragment'}
							className={s.navItem}
							activeClassName={s.active}
							onClick={() => setShowMenu(!showMenu)}
						>
							<img src={catalog} alt="" className={s.navImg}/>
							<span className={s.navName}>Создать фрагмент</span>
						</NavLink>
					</nav>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	avatar: state.profile.avatar,
	userName: state.profile.name
});

export default connect(mapStateToProps, {getProfile})(MobileNavbar);