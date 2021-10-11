import {
	clearLoginFields,
	clearLoginValidationMessages,
	setLoginValidationMessages,
	toggleLoginFetching
} from "./loginReducer";
import {authAPI} from "../api/api";
import {
	clearRegisterFields,
	clearRegisterValidationMessages,
	setRegisterValidationMessages,
	toggleRegisterFetching
} from "./registerReducer";

const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';

const initState = {
	token: localStorage.getItem('token'),
	tokenType: localStorage.getItem('tokenType'),
	isAuth: !!localStorage.getItem('token')
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
	dispatch(toggleLoginFetching(true));
	authAPI.login(email, password)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.token_type));
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('tokenType', res.data.token_type);
			dispatch(clearLoginFields());
			dispatch(toggleLoginFetching(false));
		})
		.catch(err => {
			if (err.response.status === 422 || err.response.status === 401) {
				dispatch(setLoginValidationMessages({
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
					all: !(err.response.status === 422) && err.response.data.message
				}));
			}
			dispatch(toggleLoginFetching(false));
		});
};

export const register = (name, birthday, role, email, password) => (dispatch) => {
	dispatch(clearRegisterValidationMessages());
	dispatch(toggleRegisterFetching(true));
	authAPI.register(name, birthday, role, email, password)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.token_type));
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('tokenType', res.data.token_type);
			dispatch(clearRegisterFields());
			dispatch(toggleRegisterFetching(false));
		})
		.catch(err => {
			if (err.response.status === 422) {
				dispatch(setRegisterValidationMessages({
					name: err.response.data.errors.name,
					date: err.response.data.errors.date,
					role: err.response.data.errors.role,
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
				}));
			}
			dispatch(toggleRegisterFetching(false));
		});
};

export const logout = (tokenType, token) => (dispatch) => {
	authAPI.logout(tokenType, token)
		.then(res => {
			localStorage.clear();
			dispatch(logoutAction());
		})
		.catch(err => console.log(err.response));
};


export default authReducer;