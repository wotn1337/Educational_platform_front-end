import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {getProfile} from "../../redux/profileReducer";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";

class ProfilePageContainer extends React.Component {
	componentDidMount() {
		this.props.getProfile();
	}

	render() {
		return <ProfilePage {...this.props}
		                    {...this.state}
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
		isFetching: state.profile.isFetching
	};
};

export default compose(
	connect(mapStateToProps, {getProfile}),
	withoutAuthRedirectToAuthPage
)(ProfilePageContainer);
