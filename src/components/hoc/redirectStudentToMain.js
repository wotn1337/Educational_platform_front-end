import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	role: state.auth.role
});

export const redirectStudentToMain = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.role === 'student') {
				return <Redirect to='/'/>
			}

			return <Component {...this.props}/>;
		}
	}

	return connect(mapStateToProps)(RedirectComponent);
}