import React from "react";
import s from "../AllUsers.module.css";

class User extends React.Component {
    state = {
        name: this.props.user.name,
        role: this.props.user.role,
        email: this.props.user.email,
        isEdit: false
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
            <tr key={this.props.user.id}>
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
                <button className={`${s.btn} ${s.btnBlock}`}> </button>
                {!this.state.isEdit
                    ? <button onClick={this.toggleEditMode} className={`${s.btn} ${s.btnEdit}`}> </button>
                    : <button onClick={this.toggleEditMode} className={`${s.btn} ${s.btnSubmit}`}> </button>
                }
            </tr>
        )
    }
}

export default User;