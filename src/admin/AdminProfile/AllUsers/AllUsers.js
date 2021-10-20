import React, {useState} from "react";
import s from './AllUsers.module.css';
import User from "./User/User";
import Pagination from "../../../components/Pagination/Pagination";
import NewUserForm from "./NewUserForm/NewUserForm";


const AllUsers = (props) => {
	const [creatingNewUser, setCreatingNewUser] = useState(false);
	const users = props.users.map(user => {
		return (
			<User
				key={user.id}
				user={user}
				blockUser={props.blockUser}
				unblockUser={props.unblockUser}
				isFetching={props.isFetching}
				changeUserData={props.changeUserData}
			/>
		);
	});

	return (
		<div style={{backgroundColor: 'white'}}>
			<table className={`table ${s.table}`}>
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
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
				<Pagination
					handler={props.changePage}
					currentPage={props.currentPage}
					prevPage={props.prevPage}
					lastPage={props.lastPage}
					nextPage={props.nextPage}
				/>
				{!creatingNewUser
					? <button
						className={`${s.btn2}`}
						onClick={() => setCreatingNewUser(true)}
					>
						Добавить нового пользователя
					</button>
					: <NewUserForm
						registerNewUser={props.registerNewUser}
						setCreatingNewUser={setCreatingNewUser}
						isFetching={props.isFetching}
					/>
				}
			</div>
		</div>
	);
}

export default AllUsers;