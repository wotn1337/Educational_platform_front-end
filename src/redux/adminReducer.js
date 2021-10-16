import {adminAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING  ';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE  ';


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
	}
};


const adminReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USERS:
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

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				allUsers: {
					...state.allUsers,
					isFetching: action.isFetching
				}
			};

		case SET_CURRENT_PAGE:
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

		default:
			return state;
	}
};

const setUsers = (users, totalUsersCount) => ({
	type: SET_USERS,
	users,
	totalUsersCount
});

const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	page
});

const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
});

export const getUsers = (token, pageNumber) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	adminAPI.getUsers(token, pageNumber)
		.then(res => {
			dispatch(setUsers(res.data.users, res.data.meta.total));
			dispatch(setCurrentPage(pageNumber));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		})
};

export const changePage = (token, pageNumber) => (dispatch) => {
	dispatch(getUsers(token, pageNumber));
};

export const registerNewUser = (token, newUserData, setStatus) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	adminAPI.registerNewUser(token, newUserData)
		.then(res => {
			setStatus({summary: res.data.message});
			dispatch(toggleIsFetching(false));
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
			dispatch(toggleIsFetching(false));
		})
};


export default adminReducer;