import {profileAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_PROFILE = 'profile/SET_PROFILE';
const SET_AVATAR = 'profile/SET_AVATAR';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING';

const initState = {
	name: '',
	birthday: '',
	email: '',
	id: null,
	role: null,
	isAdmin: false,
	password: null,
	avatar: null,
	isFetching: false
};


const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			const date = action.birthday.split('.');
			return {
				...state,
				name: action.name,
				birthday: `${date[2]}-${date[1]}-${date[0]}`,
				email: action.email,
				id: action.id,
				role: action.role,
				isAdmin: action.role === 'admin',
				avatar: state.avatar || action.avatar
			};

		case SET_AVATAR:
			return {
				...state,
				avatar: action.avatar
			};

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		default:
			return state;
	}
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setProfile = (name, birthday, email, id, role, avatar) => ({
	type: SET_PROFILE,
	name, birthday, email, id, role, avatar
});
const setAvatar = (avatar) => ({type: SET_AVATAR, avatar});


export const getProfile = () => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.getProfile()
		.then(res => {
			dispatch(setProfile(
				res.data.user.name,
				res.data.user.birthday,
				res.data.user.email,
				res.data.user.id,
				res.data.user.role,
				res.data.user.avatar
			));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		});
};

export const updateProfile = (name, birthday) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.updateProfile(name, birthday)
		.then(res => {
			dispatch(setProfile(
				res.data.user.name,
				res.data.user.birthday,
				res.data.user.email,
				res.data.user.id,
				res.data.user.role
			));
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		});
};

export const updateAvatar = (avatar) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.updateAvatar(avatar)
		.then(res => {
			dispatch(setAvatar(res.data.avatar));
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		});
};

export const deleteAvatar = () => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.deleteAvatar()
		.then((res) => {
			dispatch(setAvatar(null));
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		});
};

export const changePassword = (password) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.changePassword(password)
		.then(res => {
			dispatch(toggleIsFetching(false));
			successNotification(res.data.message);
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		})
}

export default profileReducer;