import {connect} from 'react-redux';
import {showRegisterFormAC} from "../../redux/authPageReducer";
import AuthPage from "./AuthPage";
import React from 'react';
import background from '/Users/elenagrekova/WebstormProjects/Educational_platform_front-end/src/Stylesheets/backgraund-img.png'

class AuthPageContainer extends React.Component {

	componentDidMount() {
		this.props.changeBackground(background)
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
