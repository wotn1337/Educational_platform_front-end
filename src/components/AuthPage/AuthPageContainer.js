import {connect} from 'react-redux';
import {showRegisterFormAC} from "../../redux/authPageReducer";
import AuthPage from "./AuthPage";


const mapStateToProps = (state) => {
	return {
		authPage: state.authPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeShowRegisterForm: () => {
			dispatch(showRegisterFormAC());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
