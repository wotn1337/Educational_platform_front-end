import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {
	changeField, changePassword, deleteAvatar,
	getProfile,
	showPasswordForm,
	showProfileForm, toggleSwitches,
	updateAvatar,
	updateProfile
} from "../../redux/profileReducer";
import {getUsers} from "../../redux/adminReducer";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";

class ProfilePageContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.token);
	}

	updateProfile = () => {
		this.props.updateProfile(
			this.props.token,
			this.props.profile.name,
			this.props.profile.birthday
		);
	}

	updateAvatar = (avatar) => {
		const data = new FormData();
		data.append('avatar', avatar);
		this.props.updateAvatar(
			this.props.token,
			data
		);
	}

	deleteAvatar = () => {
		this.props.deleteAvatar(this.props.token);
	}

	changePassword = (password) => {
		this.props.changePassword(this.props.token, password);
	}

	render() {
		return <ProfilePage {...this.props}
		                    updateProfile={this.updateProfile}
		                    updateAvatar={this.updateAvatar}
		                    deleteAvatar={this.deleteAvatar}
		                    changePassword={this.changePassword}
		/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		profile: state.profile,
		token: state.auth.token,
	};
};

export default compose(
	connect(mapStateToProps, {
		showProfileForm,
		showPasswordForm,
		getProfile,
		changeField,
		updateProfile,
		updateAvatar,
		toggleSwitches,
		deleteAvatar,
		changePassword
	}),
	withoutAuthRedirectToAuthPage
)(ProfilePageContainer);
