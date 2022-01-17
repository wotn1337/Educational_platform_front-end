import React from "react";
import s from './Navbar.module.css'
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";


const Navbar = ({role, logout, getProfile, isAuth, isAdmin, avatar, userName, windowWidth}) => {
	return (
		<div className={s.nav}>
			{windowWidth > 900
				? <DesktopNavbar role={role} logout={logout} isAuth={isAuth} isAdmin={isAdmin}/>
				: <MobileNavbar
					getProfile={getProfile}
					logout={logout}
					avatar={avatar}
					userName={userName}
					isAuth={isAuth}
					isAdmin={isAdmin}
					role={role}
				/>
			}
		</div>
	);
};

export default Navbar;