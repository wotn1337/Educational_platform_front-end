import {profileAPI} from "../api/api";

const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
const SET_PROFILE = 'SET_PROFILE';

const initState = {
	showProfileForm: true,
	name: null,
	birthday: null,
	email: null,
	id: null,
	role: null
};


const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_EDIT_FORM:
			return {
				...state,
				showProfileForm: !state.showProfileForm
			};

		case SET_PROFILE:
			return {
				...state,
				name: action.name,
				birthday: action.birthday,
				email: action.email,
				id: action.id,
				role: action.role
			};

		default:
			return state;
	}
};

export const showProfileForm = () => {
	return {
		type: SHOW_EDIT_FORM
	};
};

export const setProfile = (name, birthday, email, id, role) => {
	return {
		type: SET_PROFILE,
		name,
		birthday,
		email,
		id,
		role
	};
}

export const getProfile = (tokenType, token) => (dispatch) => {
	profileAPI.getProfile(tokenType, token)
		.then(res => {
			console.log(res);
			dispatch(setProfile(
				res.data.data.name,
				res.data.data.birthday,
				res.data.data.email,
				res.data.data.id,
				res.data.data.role));
		})
		.catch(err => console.log(err.response));
}

export default profileReducer;