import React from "react";


class AllUsers extends React.Component {
	render() {
		const users = this.props.users.map(user => {
			return (
				<tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
				</tr>
			);
		});

		return (
			<div>
				<table>
					<thead>
					<tr>
						<th>Имя</th>
						<th>Email</th>
						<th>Роль</th>
					</tr>
					</thead>
					<tbody>{users}</tbody>
				</table>
			</div>
		);
	}
}

export default AllUsers;