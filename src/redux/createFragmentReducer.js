const CHANGE_FRAGMENT_TYPE = 'CHANGE_FRAGMENT_TYPE';


const initState = {
	fragmentType: '',
	title: ''
};

const createFragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FRAGMENT_TYPE:
			return {...state, fragmentType: action.fragmentType};

		default:
			return state;
	}
};

export const changeFragmentType = (fragmentType) => ({
	type: CHANGE_FRAGMENT_TYPE,
	fragmentType
});

export default createFragmentReducer;