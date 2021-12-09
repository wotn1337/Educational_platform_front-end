import React, {useState} from "react";
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";


const DropDownMenu = (props) => {
	const [open, setOpen] = useState(false);
	const links = props.links.map(link => (
		<NavLink
			to={`/${Object.keys(link)[0]}`}
			className={s.dropDownItem}
			key={Object.keys(link)[0]}
		>
			{link[Object.keys(link)[0]]}
		</NavLink>
	));
	return (
		<div
			className={s.dropDown}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className={s.navLink}>{props.title}</div>
			{open &&
			<div className={s.dropDownMenu}>
				{links}
			</div>
			}
		</div>
	);
};

export default DropDownMenu;