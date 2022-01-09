import React from "react";
import s from "../AllUsers.module.css";
import UserButtons from "./UserButtons";
import {roles} from "../../../../../../common/roles";

class User extends React.Component {
	state = {
		name: this.props.user.name,
		role: this.props.user.role,
		email: this.props.user.email,
		blocked: !!this.props.user.blocked_at,
		isEdit: false,
		isFetching: false
	}

	blockUser = () => {
		this.setState({
			isFetching: true
		});
		this.props.blockUser(this.props.user.id)
			.then(() => {
				this.setState({
					blocked: true,
					isFetching: false
				});
			});
	}

	unblockUser = () => {
		this.setState({
			isFetching: true
		});
		this.props.unblockUser(this.props.user.id)
			.then(() => {
				this.setState({
					blocked: false,
					isFetching: false
				});
			});
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

	sendNewUserData = () => {
		this.setState({
			isFetching: true
		});
		this.props.changeUserData(this.props.user.id, {
			name: this.state.name,
			role: this.state.role
		}).then(() => {
			this.setState({
				isFetching: false
			});
			this.toggleEditMode();
		});
	}

	render() {
		return (
			<tr className={this.state.blocked ? s.blockedUser : undefined}>
				<td>
					{!this.state.isEdit ? this.state.name :
						<input
							type='text'
							onChange={event => this.onChangeInput('name', event.target.value)}
							value={this.state.name}
						/>}
				</td>
				<td>{this.props.user.email}</td>
				<td>
					{!this.state.isEdit ? roles[this.state.role] :
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
				<UserButtons
					isFetching={this.state.isFetching}
					blocked={this.state.blocked}
					blockUser={this.blockUser}
					unblockUser={this.unblockUser}
					isEdit={this.state.isEdit}
					toggleEditMode={this.toggleEditMode}
					sendNewUserData={this.sendNewUserData}
				/>
				{/*{!this.state.isFetching &&*/}
				{/*<>*/}
				{/*	<td>{!this.state.blocked*/}
				{/*		? <button*/}
				{/*			className={`${s.btn} ${s.btnBlock}`}*/}
				{/*			onClick={this.blockUser}*/}
				{/*		> </button>*/}
				{/*		: <button*/}
				{/*			className={`${s.btn} ${s.btnUnblock}`}*/}
				{/*			onClick={this.unblockUser}*/}
				{/*		> </button>*/}
				{/*	}</td>*/}
				{/*	<td>*/}
				{/*		{!this.state.isEdit*/}
				{/*			? <button onClick={this.toggleEditMode} className={`${s.btn} ${s.btnEdit}`}></button>*/}
				{/*			: <button onClick={this.sendNewUserData} className={`${s.btn} ${s.btnSubmit}`}></button>*/}
				{/*		}*/}
				{/*	</td>*/}
				{/*</>}*/}
			</tr>
		)
	}
}

export default User;