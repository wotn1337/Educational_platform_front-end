import React from "react";
import s from "../AllUsers.module.css";

class User extends React.Component {
	state = {
		name: this.props.user.name,
		role: this.props.user.role,
		email: this.props.user.email,
		blocked: !!this.props.user.blocked_at,
		isEdit: false
	}

	blockUser = () => {
		this.setState({
			blocked: true
		});
		this.props.blockUser(this.props.user.id);
	}

	unblockUser = () => {
		this.setState({
			blocked: false
		});
		this.props.unblockUser(this.props.user.id);
	}

	toggleEditMode = () => {
		this.setState({
			isEdit: !this.state.isEdit
		})
	}

	onChangeInput = (type, data) => {
		this.setState({
			[type]: data
		})
	}

	render() {
		return (
			<tr className={this.state.blocked && s.blockedUser}>
				<td>
					{!this.state.isEdit ? this.props.user.name :
						<input
							type='text'
							onChange={event => this.onChangeInput('name', event.target.value)}
							value={this.state.name}
						/>}
				</td>
				<td>{this.props.user.email}</td>
				<td>
					{!this.state.isEdit ? this.props.user.role :
						<select
							name="role"
							onChange={event => this.onChangeInput('role', event.target.value)}
							value={this.state.role}
						>
							<option value="student">Ученик</option>
							<option value="creator">Учитель</option>
							<option value="admin">Админ</option>
						</select>}
				</td>
				<td>{!this.state.blocked
					? <button
						className={`${s.btn} ${s.btnBlock}`}
						onClick={this.blockUser}
					> </button>
					: <button
						className={`${s.btn} ${s.btnUnblock}`}
						onClick={this.unblockUser}
					> </button>
				}</td>
				<td>
					{!this.state.isEdit
						? <button onClick={this.toggleEditMode} className={`${s.btn} ${s.btnEdit}`}> </button>
						: <button onClick={this.toggleEditMode} className={`${s.btn} ${s.btnSubmit}`}> </button>
					}
				</td>
			</tr>
		)
	}
}

export default User;