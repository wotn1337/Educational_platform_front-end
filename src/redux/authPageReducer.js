const SHOW_REGISTER_FORM = 'SHOW_REGISTER_FORM';

const initState = {
	showRegisterForm: true
};


const authPageReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_REGISTER_FORM:
			return {
				...state,
				showRegisterForm: !state.showRegisterForm
			};

		default:
			return state;
	}
};

export const showRegisterFormAC = () => {
	return {
		type: SHOW_REGISTER_FORM
	};
};

export default authPageReducer;