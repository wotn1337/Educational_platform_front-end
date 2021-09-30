import React from "react";
import EmailInput from "../inputFieldComponents/EmailInput";
import PasswordInput from "../inputFieldComponents/PasswordInput";
import axios from "axios";


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
				all: err.response.data.message
			});
		});
	};

	return (
		<div className="container-sm">
			<h1>Войдите в систему</h1>
			<form>
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
				<button
					className="btn btn-primary"
					onClick={event => submitForm(event)}
				>
					Войти
				</button>
			</form>
		</div>
	);
};

export default Login;