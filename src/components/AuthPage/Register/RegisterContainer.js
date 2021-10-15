import React from "react";
import {connect} from 'react-redux';
import Register from "./Register";
import {register} from "../../../redux/authReducer";

class RegisterContainer extends React.Component {
	render() {
		return (
			<Register {...this.props}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		isFetching: state.auth.isFetching
	};
};

export default connect(mapStateToProps, {
	register
})(RegisterContainer);
