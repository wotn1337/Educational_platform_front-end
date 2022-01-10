import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

export const withAuthRedirectToMain = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth) {
				return <Redirect to='/'/>
			}

			return <Component {...this.props}/>;
		}
	}

	return connect(mapStateToProps)(RedirectComponent);
}