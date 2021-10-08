import {connect} from 'react-redux';
import React from "react";
import Navbar from "./Navbar";
import {logout} from "../../redux/authReducer";


class NavbarContainer extends React.Component {
	state = {
		isAuth: false
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isAuth !== this.props.isAuth) {
			this.setState({
				isAuth: this.props.isAuth
			});
		}
	}

	logout = () => {
		this.props.logout(this.props.tokenType, this.props.token);
	}

	render() {
		return <Navbar {...this.props} logout={this.logout}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		token: state.auth.token,
		tokenType: state.auth.tokenType
	};
};

export default connect(mapStateToProps, {
	logout
})(NavbarContainer);
