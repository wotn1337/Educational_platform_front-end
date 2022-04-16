import {fragmentsAPI} from "../api/api";
import {errorNotification, successNotification} from "../notifications/notifications";


const SET_FRAGMENT = 'fragment/SET_FRAGMENT';
const SET_TITLE = 'fragment/SET_TITLE';
const SET_TASK = 'fragment/SET_TASK';
const SET_CONTENT = 'fragment/SET_CONTENT';
const SET_OLD_LINKS = 'fragment/SET_OLD_LINKS';
const SET_IS_FETCHING = 'fragment/SET_IS_FETCHING';
const DELETE_TAG = 'fragment/DELETE_TAG';
const ADD_TAG = 'fragment/ADD_TAG';
const TOGGLE_FAVORITE = 'fragment/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'fragment/TOGGLE_FAVORITE_FETCHING';
const SET_ANNOTATION = 'fragment/SET_ANNOTATION';
const SET_FON = 'fragment/SET_FON';
const SET_DELETE_ERROR = 'fragment/SET_DELETE_ERROR';


const initState = {
	title: '',
	content: undefined,
	annotation: '',
	type: '',
	creator: '',
	creatorId: '',
	creatorAvatar: undefined,
	isFetching: false,
	favorite: false,
	favoriteFetching: false,
	tags: [],
	tagsIds: [],
	oldLinks: undefined,
	fon: undefined,
	deleteError: undefined,
	gameType: undefined,
	task: ''
};

const fragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRAGMENT:
			return {
				...state,
				title: action.fragment.title,
				content: action.fragment.content,
				annotation: action.fragment.annotation,
				type: action.fragment.type,
				creatorId: action.fragment.user_id,
				creator: action.fragment.user_name,
				creatorAvatar: action.fragment.user_avatar,
				favorite: action.fragment.favourite,
				tags: action.fragment.tags ? action.fragment.tags.data : [],
				tagsIds: action.fragment.tags ? action.fragment.tags.data.map(tag => tag.id) : [],
				fon: action.fragment.fon,
				oldLinks: !state.oldLinks ? action.fragment.content.images : state.oldLinks,
				gameType: action.fragment.content.gameType ? action.fragment.content.gameType: undefined,
				task: action.fragment.content.task ? action.fragment.content.task.text : undefined
			};

		case SET_TITLE:
			return {...state, title: action.title}

		case SET_TASK:
			return {...state, task: action.task}

		case SET_CONTENT:
			return {...state, content: action.content}

		case SET_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case DELETE_TAG:
			return {
				...state,
				tags: state.tags.filter(tag => tag.id !== action.tag.id),
				tagsIds: state.tagsIds.filter(id => id !== action.tag.id)
			};

		case SET_OLD_LINKS:
			return {
				...state,
				oldLinks: action.links
			};

		case ADD_TAG:
			return {
				...state,
				tags: [...state.tags, action.tag],
				tagsIds: [...state.tagsIds, action.tag.id]
			};

		case TOGGLE_FAVORITE:
			return {...state, favorite: !state.favorite};

		case TOGGLE_FAVORITE_FETCHING:
			return {...state, favoriteFetching: action.favoriteFetching};

		case SET_ANNOTATION:
			return {...state, annotation: action.annotation};

		case SET_FON:
			return {...state, fon: action.fon};

		case SET_DELETE_ERROR:
			return {...state, deleteError: action.error};

		default:
			return state;
	}
}

const setFragment = (fragment) => ({type: SET_FRAGMENT, fragment});
const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const toggleFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (favoriteFetching) => ({type: TOGGLE_FAVORITE_FETCHING, favoriteFetching});
const setDeleteError = (error) => ({type: SET_DELETE_ERROR, error});

export const setTitle = (title) => ({type: SET_TITLE, title});
export const setTask = (task) => ({type: SET_TASK, task});
export const setContent = (content) => ({type: SET_CONTENT, content});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const setOldLinks = (links) => ({type: SET_OLD_LINKS, links});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const setAnnotation = (annotation) => ({type: SET_ANNOTATION, annotation});
export const setFon = (fon) => ({type: SET_FON, fon});

export const getFragment = (id) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.getFragment(id)
		.then(res => {
			dispatch(setFragment(res.data.fragment));
			dispatch(toggleIsFetching(false));
		})
		.catch(() => {
			dispatch(toggleIsFetching(false));
		})
};

export const deleteFragment = (id, goBack, openErrorModal) => (dispatch) => {
	return fragmentsAPI.deleteFragment(id)
		.then(res => {
			successNotification(res.data.message);
			goBack();
		})
		.catch(err => {
			console.log(err.response);
			dispatch(setDeleteError(err.response.data));
			openErrorModal();
		});
};

export const editFragment = (id, type, title, content, tagsIds, annotation, fon, oldLinks, gameType, task) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.editFragment(id, type, title, content, tagsIds, annotation, fon, oldLinks, gameType, task)
		.then(res => {
			successNotification(res.data.message);
			dispatch(toggleIsFetching(false));
		})
		.catch(() => {
			errorNotification();
			dispatch(toggleIsFetching(false));
		});
}

export const changeFavorite = (id) => (dispatch) => {
	dispatch(toggleFavoriteFetching(true));
	return fragmentsAPI.changeFavorite(id)
		.then(() => {
			dispatch(toggleFavorite());
			dispatch(toggleFavoriteFetching(false));
		})
}

export default fragmentReducer;