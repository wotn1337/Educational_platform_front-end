import React from "react";
import s from "./../AuthPage.module.css";
import LoginForm from "./LoginForm/LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import {NavLink} from "react-router-dom";


const Login = (props) => {
	const showResetForm = (e) => {
		e.preventDefault();
		props.toggleResetPasswordForm();
	}

	return (
		<div className={`container-md ${s.container_md}`}>
			<div>
				{!props.showResetPasswordForm
					? <LoginForm login={props.login} isFetching={props.isFetching}/>
					: <ForgotPasswordForm isFetching={props.isFetching} forgotPassword={props.forgotPassword}/>}
				<span
					className={`${s.resetLink}`}
					onClick={event => showResetForm(event)}
				>
					{props.showResetPasswordForm ? 'Войти' : 'Забыли пароль?'}
				</span>
				<NavLink to={'/register'} className={`${s.logLink}`}>Зарегистрироваться</NavLink>
			</div>
		</div>
	);
};

export default Login;