import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {Redirect} from "react-router-dom";
import {getProfile, showProfileForm} from "../../redux/profileReducer";

class ProfilePageContainer extends React.Component {
	state = {
		isAuth: this.props.isAuth,
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

	render() {
		if (!this.state.isAuth) {
			return <Redirect to={'/auth'}/>
		}
		return <ProfilePage {...this.props}/>;
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
	getProfile
})(ProfilePageContainer);
