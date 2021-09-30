import React from "react";
import EmailInput from "../inputFieldComponents/EmailInput";
import PasswordInput from "../inputFieldComponents/PasswordInput";


const Login = () => {
	return (
		<div className="container-sm">
			<h1>Войдите в систему</h1>
			<form>
				<EmailInput />
				<PasswordInput />
				<button className="btn btn-primary">Войти</button>
			</form>
		</div>
	);
};

export default Login;