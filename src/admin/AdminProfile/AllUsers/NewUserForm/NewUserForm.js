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
						<div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '5px'}}>
							<button
								className={`${s.btn2}`}
								type={'submit'}
								disabled={props.isFetching}
							>Добавить нового пользователя
							</button>
							<button
								className={`${s.btn2}`}
								disabled={props.isFetching}
								onClick={() => props.setCreatingNewUser(false)}
							>Скрыть форму
							</button>
						</div>
						<div>
							<Field component={'input'} type={'text'} name={'name'} placeholder={'Имя'}
							       className={`${s.formControl}`}/>
							<div>{status && status.name}</div>
						</div>
						<div>
							<Field component={'input'} type={'email'} name={'email'} placeholder={'Email'}
							       className={` ${s.formControl}`}/>
							<div>{status && status.email}</div>
						</div>
						<div>
							<Field component={'input'} type={'password'} name={'password'}
							       placeholder={'Пароль'}
							       className={`${s.formControl}`}/>
							<div>{status && status.password}</div>
						</div>
						<div>
							<Field component={'select'} name={'role'}
							       className={`${s.formControl}`}>
								<option value="admin">Админ</option>
								<option value="creator">Учитель</option>
								<option value="student">Ученик</option>
							</Field>
						</div>
						<div>{status && status.summary}</div>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default NewUserForm;