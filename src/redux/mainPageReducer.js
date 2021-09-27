const LOGOUT = 'LOGOUT';


const mainPageReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGOUT:
			return 'logout';

		default:
			return 'nothing';
	}
};

export const logoutAC = () => {
	return {
		type: LOGOUT
	};
};


export default mainPageReducer;