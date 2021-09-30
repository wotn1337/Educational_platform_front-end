const LOGIN = 'LOGIN';
const CHANGE_FIELD = 'CHANGE_FIELD';
const SET_VALIDATION_MESSAGES = 'SET_VALIDATION_MESSAGES';
const CLEAR_VALIDATION_MESSAGES = 'CLEAR_VALIDATION_MESSAGES';


const initState = {
	email: '',
	password: '',
	validationMessages: {
		email: '',
		password: '',
		all: ''
	},
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

		case LOGIN:
			return 'login';

		default:
			return state;
	}
};

export const loginAC = () => {
	return {
		type: LOGIN
	};
};

export const changeFieldAC = (field, newValue) => {
	return {
		type: CHANGE_FIELD,
		field,
		newValue
	}
};

export const setValidationMessagesAC = (errors) => {
	return {
		type: SET_VALIDATION_MESSAGES,
		errors
	};
};

export const clearValidationMessagesAC = () => {
	return {
		type: CLEAR_VALIDATION_MESSAGES
	};
}

export default loginReducer;