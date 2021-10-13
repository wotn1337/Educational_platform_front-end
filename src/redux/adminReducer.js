import {adminAPI} from "../api/api";

const SET_USERS = 'SET_USERS';


const initState = {
	users: null
};


const adminReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users
			};

		default:
			return state;
	}
};

const setUsers = (users) => ({
	type: SET_USERS,
	users
});

export const getUsers = (tokenType, token) => (dispatch) => {
	return adminAPI.getUsers(tokenType, token)
		.then(res => {
			console.log(res);
			dispatch(setUsers(res.data.users));
		})
		.catch(err => console.log(err.response))
};

export default adminReducer;