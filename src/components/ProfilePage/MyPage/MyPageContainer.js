import {connect} from 'react-redux';
import React from "react";
import MyPage from "./MyPage";


class MyPageContainer extends React.Component {
	state = {
		profileForm: true,
		isEditProfileInfo: false
	}

	toggleIsEditProfileForm = () => {
		this.setState({
			isEditProfileInfo: !this.state.isEditProfileInfo
		});
	}

	togglePasswordForm = () => {
		this.setState({
			profileForm: !this.state.profileForm
		});
	}

	render() {
		return <MyPage
			{...this.props}
			{...this.state}
			toggleIsEditProfileForm={this.toggleIsEditProfileForm}
			togglePasswordForm={this.togglePasswordForm}
		/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		role: state.profile.role,
		name: state.profile.name,
		birthday: state.profile.birthday,
		email: state.profile.email,
		profile: state.profile
	};
};

export default connect(mapStateToProps, null)(MyPageContainer);
