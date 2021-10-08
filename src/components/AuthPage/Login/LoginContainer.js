import React from "react";
import {connect} from 'react-redux';
import {
	changeField
} from "../../../redux/loginReducer";
import Login from "./Login";
import {login} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
	state = {
		isAuth: this.props.isAuth
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isAuth !== this.props.isAuth) {
			this.setState({
				isAuth: this.props.isAuth
			});
		}
	}

	login = () => {
		this.props.login(this.props.email, this.props.password);
	}

	render() {
		if (this.state.isAuth) {
			return <Redirect to={'/'}/>
		}

		return <Login {...this.props} login={this.login}/>;
	}
}


const mapStateToProps = (state) => {
	return {
		email: state.login.email,
		password: state.login.password,
		isAuth: state.auth.isAuth,
		validationMessages: state.login.validationMessages
	};
};

export default connect(mapStateToProps, {
	changeField,
	login
})(LoginContainer);
