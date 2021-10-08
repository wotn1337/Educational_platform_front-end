const CHANGE_FIELD = 'CHANGE_FIELD';
const SET_VALIDATION_MESSAGES = 'SET_VALIDATION_MESSAGES';
const CLEAR_VALIDATION_MESSAGES = 'CLEAR_VALIDATION_MESSAGES';
const CLEAR_FIELDS = 'CLEAR_FIELDS';

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

		case CLEAR_FIELDS:
			return {
				...state,
				name: '',
				birthday: new Date(),
				role: 'creator',
				email: '',
				password: '',
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

export const setRegisterValidationMessages = (errors) => {
	return {
		type: SET_VALIDATION_MESSAGES,
		errors
	};
};

export const clearRegisterValidationMessages = () => {
	return {
		type: CLEAR_VALIDATION_MESSAGES
	};
}

export const clearRegisterFields = () => {
	return {
		type: CLEAR_FIELDS
	};
}

export default registerReducer;