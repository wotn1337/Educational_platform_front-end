import {fragmentsAPI} from "../api/api";
import {errorNotification, successNotification} from "../notifications/notifications";

const CHANGE_FRAGMENT_TYPE = 'createFragment/CHANGE_FRAGMENT_TYPE';
const CHANGE_FRAGMENT_TITLE = 'createFragment/CHANGE_FRAGMENT_TITLE';
const SET_IS_FETCHING = 'createFragment/SET_IS_FETCHING';
const SET_CONTENT = 'createFragment/SET_CONTENT';
const SET_TITLE_ERROR = 'createFragment/SET_TITLE_ERROR';
const ADD_TAG = 'createFragment/ADD_TAG';
const DELETE_TAG = 'createFragment/DELETE_TAG';
const SET_FON = 'createFragment/SET_FON';
const SET_ANNOTATION = 'createFragment/SET_ANNOTATION';
const CLEAR_ALL_FIELDS = 'createFragment/CLEAR_ALL_FIELDS';


const initState = {
	fragmentType: undefined,
	title: '',
	content: undefined,
	isFetching: false,
	titleError: '',
	tagsIds: [],
	tags: [],
	fon: undefined,
	annotation: ''
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
				tagsIds: [...state.tagsIds, action.tag.id],
				tags: [...state.tags, action.tag]
			};

		case DELETE_TAG:
			return {
				...state,
				tags: state.tags.filter(tag => tag.id !== action.tag.id),
				tagsIds: state.tagsIds.filter(id => id !== action.tag.id),
			};

		case SET_FON:
			return {...state, fon: action.fon};

		case SET_ANNOTATION:
			return {...state, annotation: action.annotation};

		case CLEAR_ALL_FIELDS:
			return {
				...state,
				fragmentType: '',
				title: '',
				content: undefined,
				isFetching: false,
				titleError: '',
				tagsIds: [],
				tags: [],
				fon: undefined,
				annotation: ''
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
export const setFon = (fon) => ({type: SET_FON, fon});
export const setAnnotation = (annotation) => ({type: SET_ANNOTATION, annotation});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});

const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const setTitleError = (error) => ({type: SET_TITLE_ERROR, error});

export const createFragment = (fragmentType, title, content, tagsIds, fon, annotation) => (dispatch) => {
	dispatch(setIsFetching(true));
	return fragmentsAPI.createFragment(fragmentType, title, content, tagsIds, fon, annotation)
		.then(res => {
			successNotification(res.data.message);
			dispatch(clearAllFields());
		})
		.catch(err => {
			dispatch(setTitleError(err.response.data.errors.title));
			dispatch(setIsFetching(false));
			errorNotification();
		});
};

export default createFragmentReducer;