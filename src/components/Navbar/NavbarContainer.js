import {connect} from 'react-redux';
import React from "react";
import Navbar from "./Navbar";
import {logout} from "../../redux/authReducer";
import {getProfile} from "../../redux/profileReducer";


class NavbarContainer extends React.Component {
	state = {
		windowWidth: window.innerWidth
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ windowWidth: window.innerWidth });
	}

	render() {
		return <Navbar {...this.props} {...this.state}/>;
	}
}


export const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	role: state.auth.role,
	isAdmin: state.auth.isAdmin,
	avatar: state.profile.avatar,
	userName: state.profile.name,
});

export default connect(mapStateToProps, {
	getProfile,
	logout
})(NavbarContainer);
