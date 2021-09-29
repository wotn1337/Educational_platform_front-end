import {connect} from 'react-redux';
import Register from "./Register";
import {clearValidationMessagesAC, registerAC, setValidationMessagesAC} from "../../../redux/registerReducer";
import {changeFieldAC} from "../../../redux/registerReducer";


const mapStateToProps = (state) => {
	return {
		register: state.register
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		registerHandler: () => {
			dispatch(registerAC());
		},

		changeField: (field, value) => {
			dispatch(changeFieldAC(field, value));
		},

		setValidationMessage: (errors) => {
			dispatch(setValidationMessagesAC(errors));
		},

		clearValidationMessages: () => {
			dispatch(clearValidationMessagesAC());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
