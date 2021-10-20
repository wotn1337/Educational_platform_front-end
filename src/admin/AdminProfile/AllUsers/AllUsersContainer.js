import React from "react";
import {connect} from 'react-redux';
import AllUsers from "./AllUsers";
import {
	blockUser,
	changeAllUsersPage,
	changeUserData,
	getUsers,
	registerNewUser,
	unblockUser
} from "../../../redux/adminReducer";
import Preloader from "../../../components/Preloader/Preloader";


class AllUsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.token, this.props.currentPage);
	}

	changePage = (page) => {
		this.props.changeAllUsersPage(this.props.token, page);
	}

	registerNewUser = (newUserData, setStatus) => {
		this.props.registerNewUser(this.props.token, newUserData, setStatus);
	}

	blockUser = (id) => {
		return this.props.blockUser(this.props.token, id);
	}

	unblockUser = (id) => {
		return this.props.unblockUser(this.props.token, id);
	}

	changeUserData = (id, data) => {
		return this.props.changeUserData(this.props.token, id, data);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader size={'200px'}/>
		}
		return <AllUsers
			{...this.props}
			changePage={this.changePage}
			registerNewUser={this.registerNewUser}
			blockUser={this.blockUser}
			unblockUser={this.unblockUser}
			changeUserData={this.changeUserData}
		/>;
	}
}

const mapStateToProps = (state) => ({
	users: state.admin.allUsers.users,
	totalUsersCount: state.admin.allUsers.totalUsersCount,
	currentPage: state.admin.allUsers.currentPage,
	pageSize: state.admin.allUsers.pageSize,
	isFetching: state.admin.allUsers.isFetching,
	token: state.auth.token,
	prevPage: state.admin.allUsers.prevPage,
	nextPage: state.admin.allUsers.nextPage,
	lastPage: state.admin.allUsers.lastPage
});

export default connect(mapStateToProps, {
	getUsers,
	changeAllUsersPage,
	registerNewUser,
	blockUser,
	unblockUser,
	changeUserData
})(AllUsersContainer);