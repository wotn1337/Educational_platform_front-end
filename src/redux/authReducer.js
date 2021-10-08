import {clearLoginFields, clearLoginValidationMessages, setLoginValidationMessages} from "./loginReducer";
import {authAPI} from "../api/api";
import {clearRegisterFields, clearRegisterValidationMessages, setRegisterValidationMessages} from "./registerReducer";

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

export const logoutAction = () => {
	return {
		type: LOGOUT
	};
};

export const login = (email, password) => (dispatch) => {
	dispatch(clearLoginValidationMessages());

	authAPI.login(email, password)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.token_type));
			dispatch(clearLoginFields());
		})
		.catch(err => {
			dispatch(setLoginValidationMessages({
				email: err.response.data.errors.email,
				password: err.response.data.errors.password,
				all: !(err.response.status === 422) && err.response.data.message
			}));
		});
};

export const register = (name, birthday, role, email, password) => (dispatch) => {
	dispatch(clearRegisterValidationMessages());
	authAPI.register(name, birthday, role, email, password)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.token_type));
			dispatch(clearRegisterFields());
		})
		.catch(err => {
			dispatch(setRegisterValidationMessages({
				name: err.response.data.errors.name,
				date: err.response.data.errors.date,
				role: err.response.data.errors.role,
				email: err.response.data.errors.email,
				password: err.response.data.errors.password,
			}));
		});
};

export const logout = (tokenType, token) => (dispatch) => {
	authAPI.logout(tokenType, token)
		.then(res => {
			dispatch(logoutAction());
		})
		.catch(err => console.log(err.response));
};


export default authReducer;