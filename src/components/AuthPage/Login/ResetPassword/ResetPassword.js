import React from "react";
import s from "./../../AuthPage.module.css";
import {Field, Form, Formik} from "formik";

const ResetPassword = (props) => {
	return (
		<div className={`container-md ${s.container_md}`}>
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				onSubmit={(values, {setStatus}) => props.resetPassword(values.email, values.password, setStatus)}
			>
				{({status}) => (
					<Form className={s.form}>
						<h1 className={s.text}>Изменить пароль</h1>
						<div>
							{status && status.success}
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
						<button type={'submit'} disabled={props.isFetching} className={s.btn}>Подтвердить</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ResetPassword;