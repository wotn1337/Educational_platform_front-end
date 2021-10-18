import React from 'react';
import RegisterContainer from "./Register/RegisterContainer";
import LoginContainer from "./Login/LoginContainer";
import s from './AuthPage.module.css'
import {Redirect} from "react-router-dom";

const AuthPage = (props) => {
	const showRegisterForm = (e) => {
		e.preventDefault();
		props.showRegisterForm();
	};

	return (
		<div className={`container-md ${s.container_md}`}>
			{props.authPage.showRegisterForm ? <RegisterContainer/> : <LoginContainer/>}
			<a
				href="#"
				className={`${s.logLink}`}
				onClick={event => showRegisterForm(event)}
			>
				{props.authPage.showRegisterForm ? 'Войти' : 'Регистрация'}
			</a>
		</div>
	);
}

export default AuthPage;
