import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {Redirect} from "react-router-dom";
import {
	changeField,
	getProfile,
	showPasswordForm,
	showProfileForm,
	updateAvatar,
	updateProfile
} from "../../redux/profileReducer";
import {getUsers} from "../../redux/adminReducer";

class ProfilePageContainer extends React.Component {
	state = {
		isAuth: this.props.isAuth
	}

	componentDidMount() {
		this.props.getProfile(this.props.tokenType, this.props.token);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isAuth !== this.props.isAuth) {
			this.setState({
				isAuth: this.props.isAuth
			});
		}
	}

	updateProfile = () => {
		this.props.updateProfile(
			this.props.tokenType,
			this.props.token,
			this.props.profile.name,
			this.props.profile.birthday
		);
	}

	updateAvatar = () => {
		this.props.updateProfile(
			this.props.tokenType,
			this.props.token,
			this.props.profile.avatar
		);
	}

	getUsers = () => {
		this.props.getUsers(
			this.props.tokenType,
			this.props.token
		);
	}

	render() {
		if (!this.state.isAuth) {
			return <Redirect to={'/auth'}/>
		}
		return <ProfilePage {...this.props}
		                    updateProfile={this.updateProfile}
		                    updateAvatar={this.updateAvatar}
		                    getUsers={this.getUsers}
		/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		profile: state.profile,
		isAuth: state.auth.isAuth,
		token: state.auth.token,
		tokenType: state.auth.tokenType,
		users: state.admin.users
	};
};

export default connect(mapStateToProps, {
	showProfileForm,
	showPasswordForm,
	getProfile,
	changeField,
	updateProfile,
	updateAvatar,
	getUsers
})(ProfilePageContainer);
