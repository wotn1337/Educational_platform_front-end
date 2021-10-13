import React from "react";
import EmailInput from "../../inputFieldComponents/EmailInput";
import s from "../../AuthPage.module.css";


const ResetPasswordForm = (props) => {

	return (
		<div>
			<h1 className={s.text}>Введите вашу почту в поле ниже</h1>
			<EmailInput/>
			<p className={s.caption}>После запроса вам придет письмо с новым паролем</p>
			<button
				className={`${s.btn}`}
				// onClick={event => }
			>
				Отправить
			</button>
		</div>
	);
};

export default ResetPasswordForm;