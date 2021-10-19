import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {getProfile} from "../../redux/profileReducer";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";

class ProfilePageContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile(this.props.token);
	}

	state = {
		myPage: true,
		allUsers: false,
		blackList: false
	}

	toggleSwitches = (tab) => {
		switch (tab) {
			case 'myPage':
				this.setState({
					myPage: true,
					allUsers: false,
					blackList: false
				});
				break;

			case 'allUsers':
				this.setState({
					myPage: false,
					allUsers: true,
					blackList: false
				});
				break;

			case 'blackList':
				this.setState({
					myPage: false,
					allUsers: false,
					blackList: true
				});
				break;

			default:
				break;
		}
	}

	render() {
		return <ProfilePage {...this.props}
		                    {...this.state}
		                    toggleSwitches={this.toggleSwitches}
		/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		role: state.profile.role,
		isAdmin: state.profile.isAdmin,
		avatar: state.profile.avatar,
		name: state.profile.name,
		profile: state.profile,
		token: state.auth.token,
		isFetching: state.profile.isFetching
	};
};

export default compose(
	connect(mapStateToProps, {getProfile}),
	withoutAuthRedirectToAuthPage
)(ProfilePageContainer);
