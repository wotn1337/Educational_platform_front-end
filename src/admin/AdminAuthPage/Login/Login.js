import React from "react";
import s from '../../../components/AuthPage/AuthPage.module.css';
import {Field, Form, Formik} from "formik";


const AdminLoginForm = (props) => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			onSubmit={(values, {setStatus}) => props.login(values, setStatus)}
		>
			{({status}) => (
				<Form className={s.form}>
					<h1 className={s.text}>Войти в свой кабинет</h1>
					<div className={`invalid-feedback ${s.invalidFeedback}`}>
						{status && status.summary}
					</div>
					<div className={'mb-3'}>
						<Field type={'email'} name={'email'} className={`form-control ${s.formControl}`} placeholder={'Email'}/>
						<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.email}</div>
					</div>
					<div className={'mb-3'}>
						<Field type={'password'} name={'password'} className={`form-control ${s.formControl}`} placeholder={'Пароль'}/>
						<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.password}</div>
					</div>
					<button type={'submit'} disabled={props.isFetching} className={s.btn}>Подтвердить</button>
				</Form>
			)}
		</Formik>
	);
};


const Login = (props) => {
	return (
		<AdminLoginForm login={props.login} isFetching={props.isFetching}/>
	);
};

export default Login;