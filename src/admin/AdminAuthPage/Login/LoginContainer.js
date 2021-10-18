import React from "react";
import {connect} from 'react-redux';
import Login from "./Login";
import {adminLogin} from "../../../redux/authReducer";

class LoginContainer extends React.Component {
	login = (data, setStatus) => {
		this.props.adminLogin(data, setStatus);
	}

	render() {
		return <Login {...this.props} login={this.login}/>;
	}
}


const mapStateToProps = (state) => {
	return {
		isFetching: state.auth.isFetching
	};
};

export default connect(mapStateToProps, {
	adminLogin
})(LoginContainer);
