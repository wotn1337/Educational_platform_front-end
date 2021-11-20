import {connect} from 'react-redux';
import React from "react";
import {changePassword} from "../../../redux/profileReducer";
import Preloader from "../../../common/Preloader/Preloader";
import PasswordForm from "./PasswordForm";


class ProfileFormContainer extends React.Component {
	changePassword = (password) => {
		this.props.changePassword(password);
		this.props.togglePasswordForm();
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader width={'200px'} height={'200px'}/>;
		}
		return <PasswordForm {...this.props} changePassword={this.changePassword}/>;
	}
}


export const mapStateToProps = (state) => ({
	isFetching: state.profile.isFetching
});

export default connect(mapStateToProps, {changePassword})(ProfileFormContainer);
