import {adminAPI, authAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_AUTH = 'auth/SET_AUTH';
const LOGOUT = 'auth/LOGOUT';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const TOGGLE_RESET_PASSWORD_FORM = 'auth/SHOW_RESET_PASSWORD_FORM';
const SET_BLOCKED = 'auth/SET_BLOCKED';


const initState = {
	token: localStorage.getItem('token'),
	isAuth: !!localStorage.getItem('token'),
	userId: Number(localStorage.getItem('id')),
	role: localStorage.getItem('role'),
	isFetching: false,
	showResetPasswordForm: false,
	blocked: false
};


const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return {
				...state,
				token: action.token,
				isAuth: true,
				userId: action.id,
				role: action.role
			};

		case LOGOUT:
			return {
				...state,
				token: null,
				isAuth: false,
				userId: null,
				role: null
			}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		case TOGGLE_RESET_PASSWORD_FORM:
			return {...state, showResetPasswordForm: !state.showResetPasswordForm};

		case SET_BLOCKED:
			return {...state, blocked: action.blocked};

		default:
			return state;
	}
};

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setBlocked = (blocked) => ({type: SET_BLOCKED, blocked});
const setAuth = (token, id, role) => {
	localStorage.setItem('token', token);
	localStorage.setItem('id', id);
	localStorage.setItem('role', role);
	return {type: SET_AUTH, token, id, role};
};

export const toggleResetPasswordForm = () => ({type: TOGGLE_RESET_PASSWORD_FORM});
export const logoutAction = () => ({type: LOGOUT});


export const login = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.login(data)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.user_id, res.data.user_role));
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
		})
		.catch(err => {
			console.log(err.response);
			if (err.response.status === 422 || err.response.status === 401) {
				setStatus({
					email: err.response.data.errors.email,
					password: err.response.data.errors.password,
					summary: !(err.response.status === 422) && err.response.data.message
				});
			}
			if (err.response.status === 403) {
				dispatch(setBlocked(true));
			}
			dispatch(toggleIsFetching(false));
		});
};

export const register = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.register(data)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.user_id, res.data.user_role));
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
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
		.then((res) => {
			localStorage.clear();
			dispatch(logoutAction());
			successNotification(res.data.message);
		})
		.catch(err => console.log(err.response));
};


export const adminLogin = (data, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	adminAPI.adminLogin(data)
		.then(res => {
			dispatch(setAuth(res.data.token, res.data.user_id, res.data.user_role));
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

export const forgotPassword = (email, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.forgotPassword(email)
		.then(res => {
			setStatus({success: res.data.messages});
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			setStatus({error: err.response.data.message});
			dispatch(toggleIsFetching(false));
		})
};

export const resetPassword = (email, password, token, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	authAPI.resetPassword(email, password, token)
		.then(res => {
			setStatus({success: res.data.messages});
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			setStatus({error: err.response.data.message});
			dispatch(toggleIsFetching(false));
		})
};

export default authReducer;