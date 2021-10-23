import React from "react";
import s from "./DescriptionBanner.module.css";
import descriptionImage from "../../../assets/img/mainPage/descriptionImage.png";
import {NavLink} from "react-router-dom";


const DescriptionBanner = (props) => {
	return (
		<div className={s.descriptionBanner}>
			<div className={s.descriptionWrapper}>
				<div className={s.descriptionBlock}>
					<div className={s.description}>
						<p className={s.title}><strong className={s.name}>youngeek</strong> —
							для самых маленьких и любознательных</p>
						<p className={s.text}>Миссия нашей образовательной платформы сделать обучение для детей -
							увлекательным,
							а для учителей - удобным и простым</p>
					</div>
					<img
						src={descriptionImage}
						alt="descriptionImage"
						className={s.descriptionImage}
						width={310}
						height={340}
					/>
				</div>
				{!props.isAuth &&
				<div className={s.buttonsBlock}>
					<NavLink to={'/login'} className={`${s.btn} ${s.login}`}>Войти</NavLink>
					<NavLink to={'/register'} className={`${s.btn} ${s.register}`}>Зарегистрироваться</NavLink>
				</div>
				}
			</div>
		</div>
	);
}

export default DescriptionBanner;