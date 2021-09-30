import React from 'react';
import RegisterContainer from "./Register/RegisterContainer";
import LoginContainer from "./Login/LoginContainer";

const AuthPage = (props) => {
	const showRegisterForm = (e) => {
		e.preventDefault();
		props.changeShowRegisterForm();
	};

	return (
		<div className="container-md">
			{props.authPage.showRegisterForm ? <RegisterContainer/> : <LoginContainer/>}
			<a
				href="#"
				className="link-primary"
				style={{display: 'inline-block', marginTop: '30px'}}
				onClick={event => showRegisterForm(event)}
			>
				{props.authPage.showRegisterForm ? 'Войти' : 'Зарегистрироваться'}
			</a>
		</div>
	);
}

export default AuthPage;
