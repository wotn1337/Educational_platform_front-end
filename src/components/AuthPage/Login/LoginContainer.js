import React from "react";
import {connect} from 'react-redux';
import Login from "./Login";
import {forgotPassword, login, toggleResetPasswordForm} from "../../../redux/authReducer";
import {compose} from "redux";
import {withAuthRedirectToMain} from "../../hoc/withAuthRedirectToMain";
import {redirectToBlockedPage} from "../../hoc/redirectToBlockedPage";

class LoginContainer extends React.Component {
	render() {
		return <Login {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
	isFetching: state.auth.isFetching,
	showResetPasswordForm: state.auth.showResetPasswordForm
});

export default compose(
	connect(mapStateToProps, {
		toggleResetPasswordForm,
		login,
		forgotPassword
	}),
	withAuthRedirectToMain,
	redirectToBlockedPage
)(LoginContainer);
