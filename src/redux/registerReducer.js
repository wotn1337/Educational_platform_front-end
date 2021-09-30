const REGISTER = 'REGISTER';
const CHANGE_FIELD = 'CHANGE_FIELD';
const SET_VALIDATION_MESSAGES = 'SET_VALIDATION_MESSAGES';
const CLEAR_VALIDATION_MESSAGES = 'CLEAR_VALIDATION_MESSAGES';

const initState = {
	name: '',
	birthday: new Date(),
	role: 'creator',
	email: '',
	password: '',
	validationMessages: {
		name: '',
		birthday: '',
		role: '',
		email: '',
		password: ''
	}
};


const registerReducer = (state = initState, action) => {
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
					name: action.errors.name,
					birthday: action.errors.birthday,
					role: action.errors.role,
					email: action.errors.email,
					password: action.errors.password,
				}
			};

		case CLEAR_VALIDATION_MESSAGES:
			return {
				...state,
				validationMessages: {
					...state.validationMessages,
					name: '',
					birthday: '',
					role: '',
					email: '',
					password: '',
				}
			};

		case REGISTER:
			return 'register';

		default:
			return state;
	}
};

export const registerAC = () => {
	return {
		type: REGISTER
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

export default registerReducer;