import React from "react";


const Login = () => {
	return (
		<div className="container-sm">
			<h1>Войдите в систему</h1>
			<form action="http://localhost/api/login" method="POST">
				<div className="mb-3">
					<label htmlFor="validationCustom01" className="form-label">Email</label>
					<input type="email" className="form-control"  id="validationCustom01" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="validationCustom02" className="form-label">Пароль</label>
					<input type="password" className="form-control" id="validationCustom02"/>
				</div>
				<button type="submit" className="btn btn-primary">Войти</button>
			</form>
		</div>
	);
};

export default Login;