import React from 'react';
import axios from "axios";
import NameInput from "../inputFieldComponents/NameInput";
import BirthdayInput from "../inputFieldComponents/BirthdayInput";
import EmailInput from "../inputFieldComponents/EmailInput";
import RoleInput from "../inputFieldComponents/RoleInput";
import PasswordInput from "../inputFieldComponents/PasswordInput";

const Register = (props) => {
	const submitForm = (e) => {
		e.preventDefault();
		props.clearValidationMessages();
		axios.post('http://localhost/api/register', JSON.stringify({
			name: props.register.name,
			birthday: props.register.birthday,
			role: props.register.role,
			email: props.register.email,
			password: props.register.password
		})).then(res => {
			console.log(res);
		}).catch(err => {
			props.setValidationMessage({
				name: err.response.data.errors.name,
				date: err.response.data.errors.date,
				role: err.response.data.errors.role,
				email: err.response.data.errors.email,
				password: err.response.data.errors.password,
			});
		});
	};

	return (
		<div className="container-sm">
			<h1>Зарегистрируйтесь</h1>
			<form>
				<NameInput
					changeField={props.changeField}
					name={props.name}
					validationMessage={props.register.validationMessages.name}
				/>
				<BirthdayInput
					changeField={props.changeField}
					birthday={props.birthday}
					validationMessage={props.register.validationMessages.birthday}
				/>
				<RoleInput
					changeField={props.changeField}
					role={props.role}
					validationMessage={props.register.validationMessages.role}
				/>
				<EmailInput
					changeField={props.changeField}
					email={props.email}
					validationMessage={props.register.validationMessages.email}
				/>
				<PasswordInput
					changeField={props.changeField}
					password={props.password}
					validationMessage={props.register.validationMessages.password}
				/>
				<button onClick={event => submitForm(event)} className="btn btn-primary">Зарегистрироваться</button>
			</form>
		</div>
	);
}

export default Register;
