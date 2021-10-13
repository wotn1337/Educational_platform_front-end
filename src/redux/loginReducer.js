const CHANGE_FIELD = 'CHANGE_FIELD';
const SET_VALIDATION_MESSAGES = 'SET_VALIDATION_MESSAGES';
const CLEAR_VALIDATION_MESSAGES = 'CLEAR_VALIDATION_MESSAGES';
const CLEAR_FIELDS = 'CLEAR_FIELDS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SHOW_RESET_PASSWORD_FORM = 'SHOW_RESET_PASSWORD_FORM';


const initState = {
	email: '',
	password: '',
	validationMessages: {
		email: '',
		password: '',
		all: ''
	},
	isFetching: false,
	showPasswordForm: false
};


const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FIELD:
			return {
				...state,
				[action.field]: action.newValue
			};

		case SET_VALIDATION_MESSAGES:
			return {
				...state,
				validationMessages: {
					...state.validationMessages,
					email: action.errors.email,
					password: action.errors.password,
					all: action.errors.all
				}
			};

		case CLEAR_VALIDATION_MESSAGES:
			return {
				...state,
				validationMessages: {
					...state.validationMessages,
					email: '',
					password: '',
					all: ''
				}
			};

		case CLEAR_FIELDS:
			return {
				...state,
				email: '',
				password: ''
			};

		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};

		case SHOW_RESET_PASSWORD_FORM:
			return {
				...state,
				showPasswordForm: !state.showPasswordForm
			}

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

export const setLoginValidationMessages = (errors) => {
	return {
		type: SET_VALIDATION_MESSAGES,
		errors
	};
};

export const clearLoginValidationMessages = () => {
	return {
		type: CLEAR_VALIDATION_MESSAGES
	};
}

export const clearLoginFields = () => {
	return {
		type: CLEAR_FIELDS
	};
}

export const toggleLoginFetching = (isFetching) => {
	return {
		type: TOGGLE_FETCHING,
		isFetching
	};
};

export const showResetPasswordForm = () => {
	return {
		type: SHOW_RESET_PASSWORD_FORM
	};
};


export default loginReducer;