import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	blocked: state.auth.blocked
});

export const redirectToBlockedPage = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.blocked) {
				return <Redirect to='/blocked'/>
			}

			return <Component {...this.props}/>;
		}
	}

	return connect(mapStateToProps)(RedirectComponent);
}