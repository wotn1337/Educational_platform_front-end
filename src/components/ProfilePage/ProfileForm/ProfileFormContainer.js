import {connect} from 'react-redux';
import React from "react";
import ProfileForm from "./ProfileForm";
import {updateProfile} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";


class ProfileFormContainer extends React.Component {
	updateProfile = (name, birthday) => {
		this.props.updateProfile(name, birthday);
		this.props.toggleIsEditProfileForm();
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader size={'200px'}/>;
		}
		return <ProfileForm {...this.props} updateProfile={this.updateProfile}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		role: state.profile.role,
		name: state.profile.name,
		birthday: state.profile.birthday,
		email: state.profile.email,
		isFetching: state.profile.isFetching
	};
};

export default connect(mapStateToProps, {updateProfile})(ProfileFormContainer);
