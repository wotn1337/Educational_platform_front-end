import {connect} from 'react-redux';
import {showRegisterForm} from "../../redux/authPageReducer";
import AuthPage from "./AuthPage";
import React from 'react';
import {Redirect} from "react-router-dom";

class AuthPageContainer extends React.Component {
	render() {
		if (this.props.isAuth) {
			return <Redirect to={'/'}/>;
		}
		return <AuthPage {...this.props}/>
	}
}
const mapStateToProps = (state) => {
	return {
		authPage: state.authPage,
		isAuth: state.auth.isAuth
	};
};;

export default connect(mapStateToProps, {showRegisterForm})(AuthPageContainer);
