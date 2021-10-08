import React from "react";
import EmailInput from "../inputFieldComponents/EmailInput";
import PasswordInput from "../inputFieldComponents/PasswordInput";
import axios from "axios";
import s from "./../AuthPage.module.css";


const Login = (props) => {
	const submitForm = (e) => {
		e.preventDefault();
		props.clearValidationMessages();
		const data = JSON.stringify({
			email: props.email,
			password: props.password
		});
		axios.post('http://localhost/api/login', data, {
			//withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(res => {
			props.setAuth(res.data.token, res.data.token_type);
		}).catch(err => {
			// props.setValidationMessages({
			// 	email: err.response.data.errors.email,
			// 	password: err.response.data.errors.password,
			// 	all: !(err.response.status === 422) ? err.response.data.message : ''
			// });
		});
	};

	return (
		<div className={`container-sm ${s.form}`}>
			<div className={s.form}>
				<form>
					<h1 className={s.text}>Войти в свой кабинет</h1>
					<div className="invalid-feedback" style={{display: 'block'}}>
						{props.validationMessages.all}
					</div>
					<EmailInput
						changeField={props.changeField}
						email={props.email}
						validationMessage={props.validationMessages.email}
					/>
					<PasswordInput
						changeField={props.changeField}
						password={props.password}
						validationMessage={props.validationMessages.password}
					/>
				</form>
			</div>
			<button
				className={`${s.btn}`}
				onClick={event => submitForm(event)}
			>
				Подтвердить
			</button>
		</div>
	);
};

export default Login;