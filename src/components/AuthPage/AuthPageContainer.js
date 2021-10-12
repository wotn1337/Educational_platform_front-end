import {connect} from 'react-redux';
import {showRegisterForm} from "../../redux/authPageReducer";
import AuthPage from "./AuthPage";
import React from 'react';

class AuthPageContainer extends React.Component {
	componentDidMount() {
	}

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

export default connect(mapStateToProps, {showRegisterForm})(AuthPageContainer);
