import React from "react";
import s from "./../AuthPage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";


const Login = (props) => {
	const showResetForm = (e) => {
		e.preventDefault();
		props.toggleResetPasswordForm();
	}

	return (
		<div>
			{!props.showResetPasswordForm
				? <LoginForm login={props.login} isFetching={props.isFetching}/>
				: <ForgotPasswordForm isFetching={props.isFetching} forgotPassword={props.forgotPassword}/>}
			<a
				href="#"
				className={`${s.resetLink}`}
				onClick={event => showResetForm(event)}
			>
				{props.showResetPasswordForm ? 'Войти' : 'Забыли пароль?'}
			</a>
		</div>
	);
};

export default Login;