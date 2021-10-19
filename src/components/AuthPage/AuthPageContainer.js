import {connect} from 'react-redux';
import {showRegisterForm} from "../../redux/authPageReducer";
import AuthPage from "./AuthPage";
import React from 'react';
import {compose} from "redux";
import {withAuthRedirectToMain} from "../../hoc/withAuthRedirectToMain";

class AuthPageContainer extends React.Component {
	render() {
		return <AuthPage {...this.props}/>
	}
}
const mapStateToProps = (state) => {
	return {
		authPage: state.authPage,
		isAuth: state.auth.isAuth
	};
};;

export default compose(
	connect(mapStateToProps, {showRegisterForm}),
	withAuthRedirectToMain
)(AuthPageContainer);
