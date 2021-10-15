import React from 'react';
import {Form, Formik, Field} from "formik";
import s from "./../AuthPage.module.css";

const RegisterForm = (props) => {
	return (
		<Formik
			initialValues={{
				name: '',
				birthday: new Date(),
				role: 'student',
				email: '',
				password: ''
			}}
			onSubmit={(values, {setStatus}) => props.register(values, setStatus)}
		>
			{({status}) => (
				<Form>
					<div className={s.form}>
						<h1 className={s.text}>Введите свои данные</h1>
						<div className={'mb-3'}>
							<Field type={'text'} name={'name'} className={`form-control ${s.formControl}`}
							       placeholder={'ФИО'}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.name}</div>
						</div>
						<div className={'mb-3'}>
							<label htmlFor={'birthday'} className={`form-label ${s.formLabel}`}>Дата рождения</label>
							<Field id={'birthday'} type={'date'} name={'birthday'} className={`form-control ${s.formControl}`}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.birthday}</div>
						</div>
						<div className={'mb-3'}>
							<label htmlFor={'role'} className={`form-label ${s.formLabel}`}>Роль</label>
							<Field id={'role'} type={'select'} component={'select'} name={'role'} className={`form-control ${s.formControl}`}>
								<option value="student">Ученик</option>
								<option value="creator">Учитель</option>
							</Field>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.role}</div>
						</div>
						<div className={'mb-3'}>
							<Field type={'email'} name={'email'} className={`form-control ${s.formControl}`}
							       placeholder={'Email'}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.email}</div>
						</div>
						<div className={'mb-3'}>
							<Field type={'password'} name={'password'} className={`form-control ${s.formControl}`}
							       placeholder={'Пароль'}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.password}</div>
						</div>
					</div>
					<button type={'submit'} disabled={props.isFetching} className={s.btn}>Зарегистрироваться</button>
				</Form>
			)}
		</Formik>
	);
}

const Register = (props) => {
	return (
		<div className={`container-sm ${s.form}`}>
			<RegisterForm register={props.register} isFetching={props.isFetching}/>
		</div>
	);
}

export default Register;
