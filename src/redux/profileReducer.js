const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
const CHANGE_FIELD = 'CHANGE_FIELD';
const SHOW_PASSWORD_FORM = 'SHOW_PASSWORD_FORM';

const initState = {
	photo: '',
	email: '',
	password: '',
	birthday: new Date(),
	showProfileForm: true,
	showPasswordForm: false
};


const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_EDIT_FORM:
			return {
				...state,
				showProfileForm: !state.showProfileForm
			};

		case CHANGE_FIELD:
			return {
				...state,
				[action.field]: action.newValue
			};

		case SHOW_PASSWORD_FORM:
			return {
				...state,
				showPasswordForm: !state.showPasswordForm
			};

		default:
			return state;
	}
};

export const showProfileFormAC = () => {
	return {
		type: SHOW_EDIT_FORM
	};
};

export const showPasswordFormAC = () => {
	return {
		type: SHOW_PASSWORD_FORM
	};
};

export const changeFieldAC = (field, newValue) => {
	return {
		type: CHANGE_FIELD,
		field,
		newValue
	}
};

export default profileReducer;