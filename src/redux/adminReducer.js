import {adminAPI} from "../api/api";

const SET_ALL_USERS = 'SET_ALL_USERS';
const TOGGLE_ALL_USERS_IS_FETCHING = 'TOGGLE_ALL_USERS_IS_FETCHING';
const SET_ALL_USERS_CURRENT_PAGE = 'SET_ALL_USERS_CURRENT_PAGE';

const SET_BLACK_LIST_USERS = 'SET_BLACK_LIST_USERS';
const TOGGLE_BLACK_LIST_IS_FETCHING = 'TOGGLE_BLACK_LIST_IS_FETCHING';
const SET_BLACK_LIST_CURRENT_PAGE = 'SET_BLACK_LIST_CURRENT_PAGE';


const initState = {
	allUsers: {
		users: [],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		prevPage: 1,
		nextPage: 1,
		lastPage: 1,
		isFetching: false
	},
	blackList: {
		users: [],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		prevPage: 1,
		nextPage: 1,
		lastPage: 1,
		isFetching: false
	}
};


const adminReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_ALL_USERS: {
			const lastPage = Math.ceil(action.totalUsersCount / state.allUsers.pageSize);
			return {
				...state,
				allUsers: {
					...state.allUsers,
					users: action.users,
					totalUsersCount: action.totalUsersCount,
					lastPage: lastPage
				}
			};
		}

		case TOGGLE_ALL_USERS_IS_FETCHING:
			return {
				...state,
				allUsers: {
					...state.allUsers,
					isFetching: action.isFetching
				}
			};

		case SET_ALL_USERS_CURRENT_PAGE: {
			const prevPage = action.page === 1 ? 1 : action.page - 1;
			const nextPage = action.page === state.allUsers.lastPage ? state.allUsers.lastPage : action.page + 1;
			return {
				...state,
				allUsers: {
					...state.allUsers,
					currentPage: action.page,
					nextPage: nextPage,
					prevPage: prevPage
				}
			};
		}

		case SET_BLACK_LIST_USERS: {
			const lastPage = Math.ceil(action.totalUsersCount / state.blackList.pageSize);
			return {
				...state,
				blackList: {
					...state.blackList,
					users: action.users,
					totalUsersCount: action.totalUsersCount,
					lastPage: lastPage
				}
			};
		}

		case TOGGLE_BLACK_LIST_IS_FETCHING:
			return {
				...state,
				blackList: {
					...state.blackList,
					isFetching: action.isFetching
				}
			};

		case SET_BLACK_LIST_CURRENT_PAGE:
			const prevPage = action.page === 1 ? 1 : action.page - 1;
			const nextPage = action.page === state.blackList.lastPage ? state.blackList.lastPage : action.page + 1;
			return {
				...state,
				blackList: {
					...state.blackList,
					currentPage: action.page,
					nextPage: nextPage,
					prevPage: prevPage
				}
			};

		default:
			return state;
	}
};

const setAllUsers = (users, totalUsersCount) => ({
	type: SET_ALL_USERS,
	users,
	totalUsersCount
});

const setAllUsersCurrentPage = (page) => ({
	type: SET_ALL_USERS_CURRENT_PAGE,
	page
});

const setBlackListUsers = (users, totalUsersCount) => ({
	type: SET_BLACK_LIST_USERS,
	users,
	totalUsersCount
});

const setBlackListCurrentPage = (page) => ({
	type: SET_BLACK_LIST_CURRENT_PAGE,
	page
});

const toggleAllUsersIsFetching = (isFetching) => ({
	type: TOGGLE_ALL_USERS_IS_FETCHING,
	isFetching
});

const toggleBlackListIsFetching = (isFetching) => ({
	type: TOGGLE_BLACK_LIST_IS_FETCHING,
	isFetching
});

export const getUsers = (token, pageNumber) => (dispatch) => {
	dispatch(toggleAllUsersIsFetching(true));
	adminAPI.getUsers(token, pageNumber)
		.then(res => {
			dispatch(setAllUsers(res.data.users, res.data.meta.total));
			dispatch(setAllUsersCurrentPage(pageNumber));
			dispatch(toggleAllUsersIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleAllUsersIsFetching(false));
		});
};

export const changeAllUsersPage = (token, pageNumber) => (dispatch) => {
	dispatch(getUsers(token, pageNumber));
};

export const registerNewUser = (token, newUserData, setStatus) => (dispatch) => {
	dispatch(toggleAllUsersIsFetching(true));
	adminAPI.registerNewUser(token, newUserData)
		.then(res => {
			setStatus({summary: res.data.message});
			dispatch(toggleAllUsersIsFetching(false));
		})
		.catch(err => {
			if (err.response.status === 500) {
				setStatus({summary: 'Пользователь успешно создан, но ошибка 500 из-за email-рассылки'});
			} else {
				setStatus({
					name: err.response.data.errors.name,
					email: err.response.data.errors.email,
					password: err.response.data.errors.password
				});
			}
			dispatch(toggleAllUsersIsFetching(false));
		})
};

export const blockUser = (token, id) => (dispatch) => {
	dispatch(toggleAllUsersIsFetching(true));
	adminAPI.blockUser(token, id)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err.response);
		})
};

export const unblockUser = (token, id) => (dispatch) => {
	adminAPI.unblockUser(token, id)
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err.response);
		})
};

export const getBlockedUsers = (token, pageNumber) => (dispatch) => {
	dispatch(toggleBlackListIsFetching(true));
	adminAPI.getBlockedUsers(token, pageNumber)
		.then(res => {
			dispatch(setBlackListUsers(res.data.users, res.data.meta.total));
			dispatch(setBlackListCurrentPage(pageNumber));
			dispatch(toggleBlackListIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleBlackListIsFetching(false));
		})
};

export const changeBlackListPage = (token, pageNumber) => (dispatch) => {
	dispatch(getBlockedUsers(token, pageNumber));
};


export default adminReducer;