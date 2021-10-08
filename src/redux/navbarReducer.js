const CHANGE_LOGGED_IN_STATUS = 'CHANGE_LOGGED_IN_STATUS';
const CHANGE_ACTIVE_LINK_STATUS = 'CHANGE_ACTIVE_LINK_STATUS';


const initState = {
	loggedIn: false,
	active: false
};

const navbarReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_LOGGED_IN_STATUS:
			return {
				...state,
				loggedIn: !state.loggedIn
			};
		case CHANGE_ACTIVE_LINK_STATUS:
			return {
				...state,
				active: !state.active
			}

		default:
			return 'nothing';
	}
};

export const changeLoggedInStatusAC = () => {
	return {
		type: CHANGE_LOGGED_IN_STATUS
	};
};
export const changeActiveLinkStatusAC = () => {
	return {
		type: CHANGE_ACTIVE_LINK_STATUS
	};
};


export default navbarReducer;