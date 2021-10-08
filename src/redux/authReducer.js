const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';

const initState = {
	token: null,
	tokenType: null,
	isAuth: false
};


const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return {
				...state,
				token: action.token,
				tokenType: action.tokenType,
				isAuth: true
			};

		case LOGOUT:
			return {
				...state,
				token: null,
				tokenType: null,
				isAuth: false
			}

		default:
			return state;
	}
};

export const setAuth = (token, tokenType) => {
	return {
		type: SET_AUTH,
		token,
		tokenType
	};
};

export const logout = () => {
	return {
		type: LOGOUT
	};
};

export default authReducer;