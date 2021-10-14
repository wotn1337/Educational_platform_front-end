import React from "react";
import {Form, Formik, Field} from "formik";
import s from './AllUsers.module.css';


const AllUsers = (props) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(<div onClick={() => props.changePage(i)} key={i} style={{cursor: 'pointer'}}>{i}</div>);
	}

	const users = props.users.map(user => {
		return (
			<tr key={user.id}>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.role}</td>
			</tr>
		);
	});

	return (
		<div style={{backgroundColor: 'white'}}>
			<table className={s.allUsersTable}>
				<thead>
				<tr>
					<th>Имя</th>
					<th>Email</th>
					<th>Роль</th>
				</tr>
				</thead>
				<tbody>
				{users}
				</tbody>
			</table>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>{pages}</div>
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
					<Form>
						<div>
							<Field component={'input'} type={'text'} name={'name'} placeholder={'Имя'}/>
							<div>{status && status.name}</div>
						</div>
						<div>
							<Field component={'input'} type={'email'} name={'email'} placeholder={'Email'}/>
							<div>{status && status.email}</div>
						</div>
						<div>
							<Field component={'input'} type={'password'} name={'password'} placeholder={'Пароль'}/>
							<div>{status && status.password}</div>
						</div>
						<div>
							<Field component={'select'} name={'role'}>
								<option value="admin">Админ</option>
								<option value="creator">Учитель</option>
								<option value="student">Ученик</option>
							</Field>
						</div>
						<div>{status && status.summary}</div>
						<button type={'submit'}>Добавить нового пользователя</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default AllUsers;