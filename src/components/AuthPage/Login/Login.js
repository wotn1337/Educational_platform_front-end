import React from "react";
import s from "./../AuthPage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";


const Login = (props) => {
	const showResetForm = (e) => {
		e.preventDefault();
		props.toggleResetPasswordForm();
	}

	return (
		<div>
			{!props.showResetPasswordForm
				? <LoginForm login={props.login} isFetching={props.isFetching}/>
				: <ResetPasswordForm isFetching={props.isFetching}/>}
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