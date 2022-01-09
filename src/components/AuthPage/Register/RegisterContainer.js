import React from "react";
import {connect} from 'react-redux';
import Register from "./Register";
import {register} from "../../../redux/authReducer";
import {compose} from "redux";
import {withAuthRedirectToMain} from "../../hoc/withAuthRedirectToMain";

class RegisterContainer extends React.Component {
	render() {
		return (
			<Register {...this.props}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		isFetching: state.auth.isFetching
	};
};

export default compose(
	connect(mapStateToProps, {
		register
	}),
	withAuthRedirectToMain
)(RegisterContainer);
