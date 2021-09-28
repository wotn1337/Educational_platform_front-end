import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
	return (
		<nav className="nav nav-pills nav-justified">
			<NavLink className="nav-link" to="/">Главная страница</NavLink>
			<NavLink className="nav-link" to="/auth">
				{props.loggedIn ? 'Выйти' : 'Войти'}
			</NavLink>
		</nav>
	);
};

export default Navbar;