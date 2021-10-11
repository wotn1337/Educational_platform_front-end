import {connect} from 'react-redux';
import {showRegisterFormAC} from "../../redux/authPageReducer";
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
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeShowRegisterForm: () => {
			dispatch(showRegisterFormAC());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPageContainer);
