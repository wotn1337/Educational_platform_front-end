import React from "react";
import {connect} from 'react-redux';
import Register from "./Register";
import {changeField} from "../../../redux/registerReducer";
import {register} from "../../../redux/authReducer";
import {Redirect} from "react-router-dom";

class RegisterContainer extends React.Component {
	state = {
		isAuth: this.props.isAuth,
		isFetching: this.props.isFetching
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isAuth !== this.props.isAuth) {
			this.setState({
				isAuth: this.props.isAuth
			});
		}
		if (prevProps.isFetching !== this.props.isFetching) {
			this.setState({
				isFetching: this.props.isFetching
			});
		}
	}

	register = () => {
		this.props.register(
			this.props.name,
			this.props.birthday,
			this.props.role,
			this.props.email,
			this.props.password
		);
	}

	render() {
		if (this.state.isAuth) {
			return <Redirect to={'/'}/>
		}

		return (
			<Register {...this.props} register={this.register} isFetching={this.state.isFetching}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		name: state.register.name,
		birthday: state.register.birthday,
		role: state.register.role,
		email: state.register.email,
		password: state.register.password,
		validationMessages: state.register.validationMessages,
		isAuth: state.auth.isAuth,
		isFetching: state.register.isFetching
	};
};

export default connect(mapStateToProps, {
	changeField,
	register
})(RegisterContainer);
