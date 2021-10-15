import React from "react";
import {Field, Form, Formik} from "formik";
import s from "../../AuthPage.module.css";


const ResetPasswordForm = (props) => {
	return (
		<Formik initialValues={{email: ''}} onSubmit={() => alert('Пароль обновлен!')}>
			{({status}) => (
				<Form>
					<h1 className={s.text}>Введите вашу почту в поле ниже</h1>
					<div className="mb-3">
						<div className="input-group">
							<Field type={'email'} name={'email'} placeholder={'Email'} className={`form-control ${s.formControl}`}/>
						</div>
						<div className={`invalid-feedback ${s.invalidFeedback}`}>
							{status}
						</div>
					</div>
					{/*<p className={s.caption}>После запроса вам придет письмо с новым паролем</p>*/}
					<button className={`${s.btn}`} disabled={props.isFetching} type={'submit'}>Отправить</button>
				</Form>
			)}
		</Formik>
	);
};

export default ResetPasswordForm;