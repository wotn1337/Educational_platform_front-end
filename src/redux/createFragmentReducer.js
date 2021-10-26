import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const CHANGE_FRAGMENT_TYPE = 'CHANGE_FRAGMENT_TYPE';
const CHANGE_FRAGMENT_TITLE = 'CHANGE_FRAGMENT_TITLE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CONTENT = 'SET_CONTENT';
const SET_TITLE_ERROR = 'SET_TITLE_ERROR';


const initState = {
	fragmentType: '',
	title: '',
	content: '',
	isFetching: false,
	titleError: ''
};

const createFragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case CHANGE_FRAGMENT_TYPE:
			return {...state, fragmentType: action.fragmentType};

		case CHANGE_FRAGMENT_TITLE:
			return {...state, title: action.fragmentTitle};

		case SET_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		case SET_CONTENT:
			return {...state, content: JSON.stringify(action.content)};

		case SET_TITLE_ERROR:
			return {...state, titleError: action.error};

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

export const setContent = (content) => ({
	type: SET_CONTENT,
	content
});

const setIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	isFetching
});

const setTitleError = (error) => ({
	type: SET_TITLE_ERROR,
	error
});

export const createFragment = (token, fragmentType, title, content) => (dispatch) => {
	dispatch(setIsFetching(true));
	fragmentsAPI.createFragment(token, fragmentType, title, content)
		.then(res => {
			successNotification(res.data.message);
			dispatch(setTitleError(''));
			dispatch(changeFragmentTitle(''));
			//dispatch(setContent(''));
			dispatch(setIsFetching(false));
		})
		.catch(err => {
			dispatch(setTitleError(err.response.data.errors.title));
			dispatch(setIsFetching(false));
		});
};

export default createFragmentReducer;