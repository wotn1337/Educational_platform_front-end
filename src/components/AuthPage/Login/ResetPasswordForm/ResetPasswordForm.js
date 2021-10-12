import React from "react";
import EmailInput from "../../inputFieldComponents/EmailInput";
import s from "../../AuthPage.module.css";


const ResetPasswordForm = (props) => {

	return (
		<div>
			<h3>Введите вашу почту в поле ниже</h3>
			<EmailInput/>
			<p>После запроса вам на почту придет письмо с новым паролем</p>
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