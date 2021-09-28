const CHANGE_LOGGED_IN_STATUS = 'CHANGE_LOGGED_IN_STATUS';


const initState = {
	loggedIn: false
};

const navbarReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_LOGGED_IN_STATUS:
			return {
				...state,
				loggedIn: !state.loggedIn
			};

		default:
			return 'nothing';
	}
};

export const changeLoggedInStatusAC = () => {
	return {
		type: CHANGE_LOGGED_IN_STATUS
	};
};


export default navbarReducer;