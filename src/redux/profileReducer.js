import {profileAPI} from "../api/api";
const CHANGE_FIELD = 'CHANGE_FIELD';
const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
const SET_PROFILE = 'SET_PROFILE';
const SHOW_PASSWORD_FORM = 'SHOW_PASSWORD_FORM';

const initState = {
	showProfileForm: true,
	showPasswordForm: false,
	name: null,
	birthday: null,
	email: null,
	id: null,
	role: null,
	password: null
};


const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FIELD:
			return {
				...state,
				[action.field]: action.newValue
			};

		case SHOW_EDIT_FORM:
			return {
				...state,
				showProfileForm: !state.showProfileForm
			};

		case SHOW_PASSWORD_FORM:
			return {
				...state,
				showPasswordForm: !state.showPasswordForm
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

export const changeField = (field, newValue) => {
	return {
		type: CHANGE_FIELD,
		field,
		newValue
	}
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

export const showProfileForm = () => {
	return {
		type: SHOW_EDIT_FORM
	};
};
export const showPasswordForm = () => {
	return {
		type: SHOW_PASSWORD_FORM
	};
};

export default profileReducer;