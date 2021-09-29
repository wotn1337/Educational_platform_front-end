import React from 'react';
import axios from "axios";

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
				{/*<div className="mb-3">*/}
				{/*	<label htmlFor="validationCustom01" className="form-label">ФИО</label>*/}
				{/*	<input*/}
				{/*		type="text"*/}
				{/*		className="form-control"*/}
				{/*		id="validationCustom01"*/}
				{/*		aria-describedby="emailHelp"*/}
				{/*		onChange={(event) => props.changeField('name', event.target.value)}*/}
				{/*		value={props.name}*/}
				{/*	/>*/}
				{/*</div>*/}
				<div className="mb-3">
					<label htmlFor="validationCustomUsername" className="form-label">ФИО</label>
					<div className="input-group has-validation">
						<input
							type="text"
							className="form-control"
							id="validationCustomUsername"
							aria-describedby="inputGroupPrepend"
							onChange={(event) => props.changeField('name', event.target.value)}
							value={props.name}
						/>
					</div>
					<div className="invalid-feedback" style={{display: 'block'}}>
						{props.register.validationMessages.name}
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="validationCustom02" className="form-label">Дата рождения</label>
					<div className="input-group has-validation">
						<input
							type="date"
							className="form-control"
							id="validationCustom02"
							onChange={(event) => props.changeField('birthday', event.target.value)}
							value={props.birthday}
						/>
						<div className="invalid-feedback" style={{display: 'block'}}>
							{props.register.validationMessages.date}
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault03" className="form-label">Роль</label>
					<div className="input-group has-validation">
						<select
							className="form-select"
							id="validationDefault03"
							onChange={(event) => props.changeField('role', event.target.value)}
							value={props.role}
						>
							<option value="creator">Учитель</option>
							<option value="student">Ученик</option>
						</select>
						<div className="invalid-feedback" style={{display: 'block'}}>
							{props.register.validationMessages.role}
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault04" className="form-label">Email</label>
					<div className="input-group has-validation">
						<input
							type="email"
							className="form-control"
							id="validationDefault04"
							aria-describedby="emailHelp"
							onChange={(event) => props.changeField('email', event.target.value)}
							value={props.email}
						/>
						<div className="invalid-feedback" style={{display: 'block'}}>
							{props.register.validationMessages.email}
						</div>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault05" className="form-label">Пароль</label>
					<div className="input-group has-validation">
						<input
							type="password"
							className="form-control"
							id="validationDefault05"
							onChange={(event) => props.changeField('password', event.target.value)}
							value={props.password}
						/>
						<div className="invalid-feedback" style={{display: 'block'}}>
							{props.register.validationMessages.password}
						</div>
					</div>
				</div>
				<button onClick={event => submitForm(event)} className="btn btn-primary">Зарегистрироваться</button>
			</form>
		</div>
	);
}

export default Register;
