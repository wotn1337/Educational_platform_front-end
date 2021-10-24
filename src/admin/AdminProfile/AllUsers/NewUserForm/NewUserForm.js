import React from "react";
import s from "../AllUsers.module.css";
import {Field, Form, Formik} from "formik";


const NewUserForm = (props) => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
				role: 'admin'
			}}
			onSubmit={(values, {setStatus}) => props.registerNewUser(values, setStatus)}
		>
			{({status}) => (
				<div className={s.form}>
					<Form>
						<div>
							<Field component={'input'} type={'text'} name={'name'} placeholder={'Имя'}
							       className={`${s.formControl}`}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.name}</div>
						</div>
						<div>
							<Field component={'input'} type={'email'} name={'email'} placeholder={'Email'}
							       className={` ${s.formControl}`}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.email}</div>
						</div>
						<div>
							<Field component={'input'} type={'password'} name={'password'}
							       placeholder={'Пароль'}
							       className={`${s.formControl}`}/>
							<div className={`invalid-feedback ${s.invalidFeedback}`}>{status && status.password}</div>
						</div>
						<div>
							<Field component={'select'} name={'role'}
							       className={`${s.formControl}`}>
								<option value="admin">Админ</option>
								<option value="creator">Учитель</option>
								<option value="student">Ученик</option>
							</Field>
						</div>
						<button
							className={`${s.btn2}`}
							type={'submit'}
							disabled={props.isFetching}
						>Добавить нового пользователя
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default NewUserForm;