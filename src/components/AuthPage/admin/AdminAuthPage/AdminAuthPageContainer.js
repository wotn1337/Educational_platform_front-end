import {connect} from 'react-redux';
import AdminAuthPage from "./AdminAuthPage";
import React from 'react';
import {Redirect} from "react-router-dom";

class AdminAuthPageContainer extends React.Component {
	render() {
		if (this.props.isAuth) {
			return <Redirect to={'/'}/>;
		}
		return <AdminAuthPage {...this.props}/>
	}
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

export default connect(mapStateToProps)(AdminAuthPageContainer);
