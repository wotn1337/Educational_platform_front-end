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

	render() {
		if (!this.state.isAuth) {
			return <Redirect to={'/auth'}/>
		}
		return <ProfilePage {...this.props} updateProfile={this.updateProfile} updateAvatar={this.updateAvatar}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		profile: state.profile,
		isAuth: state.auth.isAuth,
		token: state.auth.token,
		tokenType: state.auth.tokenType
	};
};

export default connect(mapStateToProps, {
	showProfileForm,
	showPasswordForm,
	getProfile,
	changeField,
	updateProfile,
	updateAvatar
})(ProfilePageContainer);
