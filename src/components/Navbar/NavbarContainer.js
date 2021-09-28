import {connect} from 'react-redux';
import Navbar from "./Navbar";
import {changeLoggedInStatusAC} from "../../redux/navbarReducer";


export const mapStateToProps = (state) => {
	return {
		state: state.navbar
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		changeLoggedInStatus: () => {
			dispatch(changeLoggedInStatusAC());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
