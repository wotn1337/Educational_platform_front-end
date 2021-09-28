const REGISTER = 'REGISTER';
const CHANGE_FIELD = 'CHANGE_FIELD';

const initState = {
	name: '',
	birthday: new Date(),
	role: '',
	email: '',
	password: '',
};


const registerReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FIELD:
			console.log(state);
			return {
				...state,
				[action.field]: action.newValue
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

export default registerReducer;