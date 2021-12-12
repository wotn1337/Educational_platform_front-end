import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_FRAGMENT = 'fragment/SET_FRAGMENT';
const SET_TITLE = 'fragment/SET_TITLE';
const SET_CONTENT = 'fragment/SET_CONTENT';
const SET_IS_FETCHING = 'fragment/SET_IS_FETCHING';
const DELETE_TAG = 'fragment/DELETE_TAG';
const ADD_TAG = 'fragment/ADD_TAG';
const TOGGLE_FAVORITE = 'fragment/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'fragment/TOGGLE_FAVORITE_FETCHING';


const initState = {
	title: '',
	content: undefined,
	type: '',
	creator: '',
	creatorId: '',
	creatorAvatar: undefined,
	isFetching: false,
	favorite: false,
	favoriteFetching: false,
	tags: [],
	tagsIds: [],
};

const fragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRAGMENT:
			return {
				...state,
				title: action.fragment.title,
				content: action.fragment.content,
				type: action.fragment.type,
				creatorId: action.fragment.user_id,
				creator: action.fragment.user_name,
				creatorAvatar: action.fragment.user_avatar,
				favorite: action.fragment.favourite,
				tags: action.fragment.tags ? action.fragment.tags.data : [],
				tagsIds: action.fragment.tags ? action.fragment.tags.data.map(tag => tag.id) : []
			};

		case SET_TITLE:
			return {...state, title: action.title}

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

		case ADD_TAG:
			return {
				...state,
				tags: [...state.tags, action.tag],
				tagsIds: [state.tagsIds, action.tag.id]
			};

		case TOGGLE_FAVORITE:
			return {...state, favorite: !state.favorite};

		case TOGGLE_FAVORITE_FETCHING:
			return {...state, favoriteFetching: action.favoriteFetching};

		default:
			return state;
	}
}

const setFragment = (fragment) => ({type: SET_FRAGMENT, fragment});
const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const toggleFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (favoriteFetching) => ({type: TOGGLE_FAVORITE_FETCHING, favoriteFetching});

export const setTitle = (title) => ({type: SET_TITLE, title});
export const setContent = (content) => ({type: SET_CONTENT, content});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const addTag = (tag) => ({type: ADD_TAG, tag});

export const getFragment = (id) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.getFragment(id)
		.then(res => {
			console.log(res.data);
			dispatch(setFragment(res.data.fragment));
			dispatch(toggleIsFetching(false));
		})
		.catch(() => {
			dispatch(toggleIsFetching(false));
		})
};

export const deleteFragment = (id) => () => {
	fragmentsAPI.deleteFragment(id)
		.then(res => successNotification(res.data.message))
		.catch(err => console.log(err.response));
};

export const editFragment = (id, title, content, tagsIds) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.editFragment(id, title, content, tagsIds)
		.then(res => {
			console.log({id, title, content, tagsIds});
			successNotification(res.data.message);
			dispatch(toggleIsFetching(false));
		})
		.catch(() => {
			dispatch(toggleIsFetching(false));
		});
}

export const changeFavorite = (id) => (dispatch) => {
	dispatch(toggleFavoriteFetching(true));
	fragmentsAPI.changeFavorite(id)
		.then(() => {
			dispatch(toggleFavorite());
			dispatch(toggleFavoriteFetching(false));
		})
}

export default fragmentReducer;