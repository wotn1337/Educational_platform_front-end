const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';

const initState = {
	showProfileForm: true
};


const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_EDIT_FORM:
			return {
				...state,
				showProfileForm: !state.showProfileForm
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

export default profileReducer;