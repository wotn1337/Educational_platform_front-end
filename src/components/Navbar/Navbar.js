import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = () => {
	return (
		<nav className="nav nav-pills nav-justified">
			<NavLink className="nav-link" aria-current="page" to="/">Main</NavLink>
			<NavLink className="nav-link" to="/">Logout</NavLink>
		</nav>
	);
};

export default Navbar;