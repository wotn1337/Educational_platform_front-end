import {connect} from 'react-redux';
import Register from "./Register";
import {registerAC} from "../../../redux/registerReducer";
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
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
