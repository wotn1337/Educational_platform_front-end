import React from "react";
import User from "./User/User";
import s from './BlackList.module.css';
import Pagination from "../../../../common/Pagination/Pagination";


const AllUsers = (props) => {
	const users = props.users.map(user => {
		return (
			<User key={user.id} user={user} isFetching={props.isFetching} unblockUser={props.unblockUser}/>
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
			</div>
		</div>
	);
}

export default AllUsers;