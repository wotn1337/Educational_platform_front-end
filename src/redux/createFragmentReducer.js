const CHANGE_FRAGMENT_TYPE = 'CHANGE_FRAGMENT_TYPE';
const CHANGE_FRAGMENT_TITLE = 'CHANGE_FRAGMENT_TITLE';


const initState = {
	fragmentType: '',
	title: ''
};

const createFragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FRAGMENT_TYPE:
			return {...state, fragmentType: action.fragmentType};

		case CHANGE_FRAGMENT_TITLE:
			return {...state, title: action.fragmentTitle};

		default:
			return state;
	}
};

export const changeFragmentType = (fragmentType) => ({
	type: CHANGE_FRAGMENT_TYPE,
	fragmentType
});

export const changeFragmentTitle = (fragmentTitle) => ({
	type: CHANGE_FRAGMENT_TITLE,
	fragmentTitle
});

export default createFragmentReducer;