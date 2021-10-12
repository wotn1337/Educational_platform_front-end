import {connect} from 'react-redux';
import AdminAuthPage from "./AdminAuthPage";
import React from 'react';

class AdminAuthPageContainer extends React.Component {
	render() {
		return <AdminAuthPage {...this.props}/>
	}
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};

export default connect(mapStateToProps)(AdminAuthPageContainer);
