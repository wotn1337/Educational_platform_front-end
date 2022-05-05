import {fragmentsAPI} from "../api/api";
import {errorNotification, successNotification} from "../notifications/notifications";

const CHANGE_FRAGMENT_TYPE = 'createFragment/CHANGE_FRAGMENT_TYPE';
const CHANGE_FRAGMENT_TITLE = 'createFragment/CHANGE_FRAGMENT_TITLE';
const SET_IS_FETCHING = 'createFragment/SET_IS_FETCHING';
const SET_CONTENT = 'createFragment/SET_CONTENT';
const SET_ERRORS = 'createFragment/SET_ERRORS';
const ADD_TAG = 'createFragment/ADD_TAG';
const DELETE_TAG = 'createFragment/DELETE_TAG';
const SET_FON = 'createFragment/SET_FON';
const SET_ANNOTATION = 'createFragment/SET_ANNOTATION';
const SET_TASK = 'createFragment/SET_TASK';
const SET_GAME_TYPE = 'createFragment/SET_GAME_TYPE';
const CLEAR_ALL_FIELDS = 'createFragment/CLEAR_ALL_FIELDS';
const SET_AGE_LIMIT = 'createFragment/SET_AGE_LIMIT'


const initState = {
	fragmentType: undefined,
	title: '',
	content: undefined,
	isFetching: false,
	tagsIds: [],
	tags: [],
	fon: undefined,
	annotation: '',
	gameType: undefined,
	task: undefined,
	errors: undefined,
	ageLimitId: "1"
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

		case SET_TASK:
			return {...state, task: action.task};

		case SET_GAME_TYPE:
			return {...state, gameType: action.gameType};

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
				annotation: '',
				gameType: undefined,
				task: undefined,
				ageLimitId: "0"
			};

		case SET_ERRORS:
			return {...state, errors: action.errors};

		case SET_AGE_LIMIT:
			return {...state, ageLimitId: action.ageLimitId}

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
export const setTask = (task) => ({type: SET_TASK, task});
export const setGameType = (gameType) => ({type: SET_GAME_TYPE, gameType});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});
export const setAgeLimit = (ageLimitId) => ({type: SET_AGE_LIMIT, ageLimitId});

const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const setErrors = (errors) => ({type: SET_ERRORS, errors});

export const createFragment = (fragmentType, title, content, tagsIds, fon, annotation, gameType, task, ageLimitId) => (dispatch) => {
	dispatch(setIsFetching(true));
	return fragmentsAPI.createFragment(fragmentType, title, content, tagsIds, fon, annotation, gameType, task, ageLimitId)
		.then(res => {
			successNotification(res.data.message);
			dispatch(clearAllFields());
			dispatch(setIsFetching(false));
		})
		.catch(err => {
			dispatch(setErrors(err.response.data.errors));
			dispatch(setIsFetching(false));
			errorNotification();
		});
};

export default createFragmentReducer;