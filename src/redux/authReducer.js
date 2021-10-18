import {adminAPI, authAPI} from "../api/api";


const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_RESET_PASSWORD_FORM = 'SHOW_RESET_PASSWORD_FORM';


const initState = {
	token: localStorage.getItem('token'),
	isAuth: !!localStorage.getItem('token'),
	isFetching: false,
	showResetPasswordForm: false
};


const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return {
				...state,
				token: action.token,
				isAuth: true
			};

		case LOGOUT:
			return {
				...state,
				token: null,
				isAuth: false
			}

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};

		case TOGGLE_RESET_PASSWORD_FORM:
			return {
				...state,
				showResetPasswordForm: !state.showResetPasswordForm
			}

		default:
			return state;
	}
};

const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	};
};

export const toggleResetPasswordForm = () => {
	return {
		type: TOGGLE_RESET_PASSWORD_FORM
	};
};

const setAuth = (token) => {
	localStorage.setItem('token', token);
	return {
		type: SET_AUTH,
		token,
	};
};

export const logoutAction = () => {
	return {
		type: LOGOUT
	};
};

export const login = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.login(data)
		.then(res => {
			dispatch(setAuth(res.data.token));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			if (err.response.status === 422 || err.response.status === 401) {
				setStatus({
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
					summary: !(err.response.status === 422) && err.response.data.message
				});
			}
			dispatch(toggleIsFetching(false));
		});
};

export const register = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.register(data)
		.then(res => {
			dispatch(setAuth(res.data.token));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			if (err.response.status === 422) {
				setStatus({
					name: err.response.data.errors.name,
					birthday: err.response.data.errors.date,
					role: err.response.data.errors.role,
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
				});
			}
			dispatch(toggleIsFetching(false));
		});
};

export const logout = (token) => (dispatch) => {
	authAPI.logout(token)
		.then(() => {
			localStorage.clear();
			dispatch(logoutAction());
		})
		.catch(err => console.log(err.response));
};


export const adminLogin = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	adminAPI.adminLogin(data)
		.then(res => {
			dispatch(setAuth(res.data.token));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			if (err.response.status === 422 || err.response.status === 401) {
				setStatus({
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
					summary: !(err.response.status === 422) && err.response.data.message
				});
			}
			dispatch(toggleIsFetching(false));
		});
};

export default authReducer;