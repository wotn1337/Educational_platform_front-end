import React from "react";
import s from './Login.module.css'

const Login = () => {
	return (
		<div className={`container-sm`}>
			<form className={`${s.loginForm}`} action="http://localhost/api/login" method="POST">
				<h1 className={s.text}>Войти в свой кабинет</h1>
				<div className="mb-3">
					{/*<label htmlFor="validationCustom01" className="form-label" ></label>*/}
					<input type="email" placeholder="Email" className={`form-control ${s.formControl}`}
						   id="validationCustom01" aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					{/*<label htmlFor="validationCustom02" className="form-label"></label>*/}
					<input placeholder='Password' type="password" className={`form-control ${s.formControl}`}
						   id="validationCustom02"/>
				</div>
				<button type="submit" className={`btn btn-primary ${s.btn} ${s.text}`}>Подтвердить</button>
			</form>
		</div>
	);
};

export default Login;