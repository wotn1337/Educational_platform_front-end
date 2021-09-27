import React from 'react';

const Register = () => {
	return (
		<div className="container-sm">
			<h1>Зарегистрируйтесь</h1>
			<form action="http://localhost/api/register" method="POST">
				<div className="mb-3">
					<label htmlFor="validationCustom01" className="form-label">ФИО</label>
					<input type="text" className="form-control" id="validationCustom01" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="validationCustom02" className="form-label">Дата рождения</label>
					<input type="date" className="form-control" id="validationCustom02"/>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault03" className="form-label">Роль</label>
					<select className="form-select" id="validationDefault03">
						<option>Учитель</option>
						<option>Ученик</option>
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault04" className="form-label">Email</label>
					<input type="email" className="form-control" id="validationDefault04" aria-describedby="emailHelp"/>
				</div>
				<div className="mb-3">
					<label htmlFor="validationDefault05" className="form-label">Пароль</label>
					<input type="password" className="form-control" id="validationDefault05"/>
				</div>
				<button type="submit" className="btn btn-primary">Зарегистрироваться</button>
			</form>
		</div>
	);
}

export default Register;
