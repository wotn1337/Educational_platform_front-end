import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const CHANGE_FRAGMENT_TYPE = 'createFragment/CHANGE_FRAGMENT_TYPE';
const CHANGE_FRAGMENT_TITLE = 'createFragment/CHANGE_FRAGMENT_TITLE';
const SET_IS_FETCHING = 'createFragment/SET_IS_FETCHING';
const SET_CONTENT = 'createFragment/SET_CONTENT';
const SET_TITLE_ERROR = 'createFragment/SET_TITLE_ERROR';
const ADD_TAG = 'createFragment/ADD_TAG';
const DELETE_TAG = 'createFragment/DELETE_TAG';


const initState = {
	fragmentType: '',
	title: '',
	content: undefined,
	isFetching: false,
	titleError: '',
	tags: []
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
			return {...state, content: action.content};

		case SET_TITLE_ERROR:
			return {...state, titleError: action.error};

		case ADD_TAG:
			return {
				...state,
				tags: state.tags.indexOf(action.tag) === -1 ? [...state.tags, action.tag] : state.tags
			};

		case DELETE_TAG:
			return {
				...state,
				tags: state.tags.filter(tag => tag !== action.tag)
			};

		default:
			return state;
	}
}

export const changeFragmentType = (fragmentType) => ({type: CHANGE_FRAGMENT_TYPE, fragmentType});
export const changeFragmentTitle = (fragmentTitle) => ({type: CHANGE_FRAGMENT_TITLE, fragmentTitle});
export const setContent = (content) => ({type: SET_CONTENT, content});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const setTitleError = (error) => ({type: SET_TITLE_ERROR, error});

export const createFragment = (token, fragmentType, title, content) => (dispatch) => {
	dispatch(setIsFetching(true));
	return fragmentsAPI.createFragment(token, fragmentType, title, content)
		.then(res => {
			successNotification(res.data.message);
			dispatch(setTitleError(''));
			dispatch(changeFragmentTitle(''));
			dispatch(setContent(''));
			dispatch(setIsFetching(false));
		})
		.catch(err => {
			dispatch(setTitleError(err.response.data.errors.title));
			dispatch(setIsFetching(false));
		});
};

export default createFragmentReducer;