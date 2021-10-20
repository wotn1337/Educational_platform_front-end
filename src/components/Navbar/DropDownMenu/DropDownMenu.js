import React, {useState} from "react";
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";


const DropDownMenu = () => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={s.dropDown}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className={s.navLink}>Мои материалы</div>
			{open &&
			<div className={s.dropDownMenu}>
				<NavLink to={'/my-fragments'} className={s.dropDownItem}>Мои фрагменты</NavLink>
				<NavLink to={'/my-lessons'} className={s.dropDownItem}>Мои уроки</NavLink>
				<NavLink to={'/favorites'} className={s.dropDownItem}>Избранное</NavLink>
			</div>
			}
		</div>
	);
};

export default DropDownMenu;