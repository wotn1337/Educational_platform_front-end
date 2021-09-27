const LOGIN = 'LOGIN';
const CHANGE_FIELD = 'CHANGE_FIELD';


const initState = {
	email: '',
	password: '',
};


const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FIELD:
			return {
				...state,
				[action.field]: action.newValue
			};

		case LOGIN:
			return 'login';

		default:
			return 'nothing';
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

export default loginReducer;