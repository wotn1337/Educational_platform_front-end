// import React from "react";
// import {connect} from 'react-redux';
// // import {
// // 	changeField
// // } from "../../../redux/loginReducer";
// import Login from "./Login";
// import {adminLogin} from "../../../redux/authReducer";
// import {Redirect} from "react-router-dom";
//
// class LoginContainer extends React.Component {
// 	state = {
// 		isAuth: this.props.isAuth,
// 		isFetching: this.props.isFetching
// 	}
//
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		if (prevProps.isAuth !== this.props.isAuth) {
// 			this.setState({
// 				isAuth: this.props.isAuth
// 			});
// 		}
// 		if (prevProps.isFetching !== this.props.isFetching) {
// 			this.setState({
// 				isFetching: this.props.isFetching
// 			});
// 		}
// 	}
//
// 	login = () => {
// 		this.props.adminLogin(this.props.email, this.props.password);
// 	}
//
// 	render() {
// 		if (this.state.isAuth) {
// 			return <Redirect to={'/'}/>
// 		}
//
// 		return <Login {...this.props} login={this.login} isFetching={this.state.isFetching}/>;
// 	}
// }
//
//
// const mapStateToProps = (state) => {
// 	return {
// 		email: state.login.email,
// 		password: state.login.password,
// 		isAuth: state.auth.isAuth,
// 		validationMessages: state.login.validationMessages,
// 		isFetching: state.login.isFetching
// 	};
// };
//
// export default connect(mapStateToProps, {
// 	changeField,
// 	adminLogin
// })(LoginContainer);
