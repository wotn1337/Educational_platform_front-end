import React from "react";
import {connect} from 'react-redux';
import AllUsers from "./AllUsers";
import {changePage, getUsers, registerNewUser} from "../../../redux/adminReducer";


class AllUsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.token, this.props.currentPage);
	}

	changePage = (page) => {
		this.props.changePage(this.props.token, page);
	}

	registerNewUser = (newUserData, setStatus) => {
		this.props.registerNewUser(this.props.token, newUserData, setStatus);
	}

	render() {
		return <AllUsers {...this.props} changePage={this.changePage} registerNewUser={this.registerNewUser}/>;
	}
}

const mapStateToProps = (state) => ({
	users: state.admin.allUsers.users,
	totalUsersCount: state.admin.allUsers.totalUsersCount,
	currentPage: state.admin.allUsers.currentPage,
	pageSize: state.admin.allUsers.pageSize,
	isFetching: state.admin.allUsers.isFetching,
	token: state.auth.token
});

export default connect(mapStateToProps, {
	getUsers,
	changePage,
	registerNewUser
})(AllUsersContainer);