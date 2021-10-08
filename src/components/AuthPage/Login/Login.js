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
			email: props.login.email,
			password: props.login.password
		});
		axios.post('http://localhost/api/login', data, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			console.log(res);
		}).catch(err => {
			props.setValidationMessage({
				email: err.response.data.errors.email,
				password: err.response.data.errors.password,
				all: !(err.response.status == '422') ? err.response.data.message : ''
			});
		});
	};

	return (
		<div className={`container-sm ${s.form}`}>
			<div className={s.form}>
				<form>
					<h1 className={s.text}>Войти в свой кабинет</h1>
					<div className="invalid-feedback" style={{display: 'block'}}>
						{props.login.validationMessages.all}
					</div>
					<EmailInput
						changeField={props.changeField}
						email={props.login.email}
						validationMessage={props.login.validationMessages.email}
					/>
					<PasswordInput
						changeField={props.changeField}
						password={props.login.password}
						validationMessage={props.login.validationMessages.password}
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