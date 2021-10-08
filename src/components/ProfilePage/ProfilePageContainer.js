import {connect} from 'react-redux';
import React from "react";
import ProfilePage from "./ProfilePage";
import {Redirect} from "react-router-dom";
import axios from "axios";

class ProfilePageContainer extends React.Component {
	state = {
		isAuth: this.props.isAuth
	}

	componentDidMount() {
		axios.get('http://localhost/api/user/home', {
			'Authorization': `${this.props.tokenType} ${this.props.token}`
		})
			.then(res => console.log(res))
			.catch(err => console.log(err.response));
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.isAuth !== this.props.isAuth) {
			this.setState({
				isAuth: this.props.isAuth
			});
		}
	}

	render() {
		if (!this.state.isAuth) {
			return <Redirect to={'/auth'}/>
		}
		return <ProfilePage {...this.props}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		token: state.auth.token,
		tokenType: state.auth.tokenType
	};
};

export default connect(mapStateToProps, {})(ProfilePageContainer);
