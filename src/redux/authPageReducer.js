const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';


const authPageReducer = (state = {}, action) => {
	switch (action.type) {
		case REGISTER:
			return 'register';

		case LOGIN:
			return 'login';

		default:
			return 'nothing';
	}
};

export const loginAC = () => {
	return {
		type: LOGIN
	};
};

export const registerAC = () => {
	return {
		type: REGISTER
	};
};


export default authPageReducer;