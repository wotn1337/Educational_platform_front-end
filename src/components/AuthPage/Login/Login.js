import React from "react";
import s from "./../AuthPage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";


const Login = (props) => {
	const login = (e) => {
		e.preventDefault();
		props.login();
	}

	const showResetForm = (e) => {
		e.preventDefault();
		props.showResetPasswordForm();
	}

	return (
		<div>
			{!props.showPasswordForm ? <LoginForm
					login={props.login}
					validationMessages={props.validationMessages}
					changeField={props.changeField}
					email={props.email}
					password={props.password}
					isFetching={props.isFetching}
				/> :
				<ResetPasswordForm/>}
			<a
				href="#"
				className={`${s.resetLink}`}
				onClick={event => showResetForm(event)}
			>
				{props.showPasswordForm ? 'Войти' : 'Забыли пароль?'}
			</a>
		</div>
	);
};

export default Login;