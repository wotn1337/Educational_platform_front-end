import {connect} from 'react-redux';
import {changeFieldAC, clearValidationMessagesAC, setValidationMessagesAC} from "../../../redux/loginReducer";
import Login from "./Login";


const mapStateToProps = (state) => {
	return {
		login: state.login
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
