import React from 'react';
import Login from "./Login/Login";
import RegisterContainer from "./Register/RegisterContainer";
import s from './AuthPage.module.css'

const AuthPage = (props) => {
	const showRegisterForm = (e) => {
		e.preventDefault();
		props.changeShowRegisterForm();
	};

	return (
			<div className={`container-md ${s.container_md}`}>
				{props.authPage.showRegisterForm ? <RegisterContainer props={props}/> : <Login props={props}/>}
				<a
					href="#"
					className={`link-primary ${s.logLink}`}
					onClick={event => showRegisterForm(event)}
				>
					{props.authPage.showRegisterForm ? 'Войти' : 'Регистрация'}
				</a>
			</div>
	);
}

export default AuthPage;
