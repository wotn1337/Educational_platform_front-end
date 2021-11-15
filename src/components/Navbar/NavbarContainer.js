import {connect} from 'react-redux';
import React from "react";
import Navbar from "./Navbar";
import {logout} from "../../redux/authReducer";


class NavbarContainer extends React.Component {
	logout = () => {
		this.props.logout(this.props.token);
	}

	render() {
		return <Navbar {...this.props} logout={this.logout}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		role: state.auth.role,
		token: state.auth.token
	};
};

export default connect(mapStateToProps, {
	logout
})(NavbarContainer);
