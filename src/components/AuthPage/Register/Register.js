import React from 'react';
import axios from "axios";
import s from './Register.module.css'

const Register = (props) => {
	const data = new FormData();
	data.append('name', props.register.name);
	data.append('birthday', props.register.birthday);
	data.append('role', props.register.role);
	data.append('email', props.register.email);
	data.append('password', props.register.password);
	const validHandl = (e) => {
		e.preventDefault();

		axios.post('http://localhost/api/register', data)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			});
	};

	return (
		<div className="container-sm">
			<form className={s.registerForm} action="http://localhost/api/register" method="POST" onSubmit={e => validHandl(e)}>
				<h1>Введите свои данные</h1>
				<div className={`mb-3 ${s.formContainer}`}>
					<label htmlFor="validationCustom01" className={`form-label ${s.formLabel}`}>ФИО</label>
					<input
						type="text"
						// placeholder='Фамилия Имя'
						className={`form-control ${s.formControl}`}
						id="validationCustom01"
						aria-describedby="emailHelp"
						onChange={(event) => props.changeField('name', event.target.value)}
						value={props.name}
					/>
				</div>
				<div className={`mb-3 ${s.formContainer}`}>
					<label htmlFor="validationCustom02" className={`form-label ${s.formLabel}`}>Дата рождения</label>
					<input
						type="date"
						className={`form-control ${s.formControl}`}
						id="validationCustom02"
						onChange={(event) => props.changeField('birthday', event.target.value)}
						value={props.birthday}
					/>
				</div>
				<div className={`mb-3 ${s.formContainer}`}>
					<label htmlFor="validationDefault03" className={`form-label ${s.formLabel}`}>Роль</label>
					<select
						className={`form-control ${s.formControl}`}
						id="validationDefault03"
						onChange={(event) => props.changeField('role', event.target.value)}
						value={props.role}
					>
						<option value="creator">Учитель</option>
						<option value="student">Ученик</option>
					</select>
				</div>
				<div className={`mb-3 ${s.formContainer}`}>
					<label htmlFor="validationDefault04" className={`form-label ${s.formLabel}`}>Email</label>
					<input
						type="email"
						className={`form-control ${s.formControl}`}
						id="validationDefault04"
						aria-describedby="emailHelp"
						onChange={(event) => props.changeField('email', event.target.value)}
						value={props.email}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault05" className={`form-label ${s.formLabel}`}>Пароль</label>
					<input
						type="password"
						className={`form-control ${s.formControl}`}
						id="validationDefault05"
						onChange={(event) => props.changeField('password', event.target.value)}
						value={props.password}
					/>
				</div>
				<button type="submit" className={`btn btn-primary ${s.btn}`}>Зарегистрирваться</button>
			</form>
		</div>
	);
}

export default Register;
