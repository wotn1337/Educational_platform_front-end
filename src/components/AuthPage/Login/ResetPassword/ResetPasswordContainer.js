import React from "react";
import {connect} from "react-redux";
import {withAuthRedirectToMain} from "../../../hoc/withAuthRedirectToMain";
import {compose} from "redux";
import ResetPassword from "./ResetPassword";
import {withRouter} from "react-router-dom";
import {resetPassword} from "../../../../redux/authReducer";


class ResetPasswordContainer extends React.Component {
	state = {
		token: new URLSearchParams(window.location.search).get('token')
	}

	resetPassword = (email, password, setStatus) => {
		this.props.resetPassword(email, password, this.state.token, setStatus);
	}

	render() {
		return (
			<ResetPassword {...this.props} resetPassword={this.resetPassword}/>
		);
	}
}

export default compose(
	connect(null, {resetPassword}),
	withAuthRedirectToMain,
	withRouter
)(ResetPasswordContainer);