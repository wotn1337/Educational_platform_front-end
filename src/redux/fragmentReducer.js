import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_FRAGMENT = 'fragment/SET_FRAGMENT';
const SET_TITLE = 'fragment/SET_TITLE';
const SET_CONTENT = 'fragment/SET_CONTENT';
const SET_IS_FETCHING = 'fragment/SET_IS_FETCHING';
const DELETE_TAG = 'fragment/DELETE_TAG';
const ADD_TAG = 'fragment/ADD_TAG';


const initState = {
	title: '',
	content: undefined,
	type: '',
	creator: '',
	creatorId: '',
	creatorAvatar: undefined,
	isFetching: false,
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
				creatorAvatar: action.fragment.avatar,
				tags: action.fragment.tags.data,
				tagsIds: action.fragment.tags.data.map(tag => tag.id)
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

		default:
			return state;
	}
}

const setFragment = (fragment) => ({type: SET_FRAGMENT, fragment});
const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const setTitle = (title) => ({type: SET_TITLE, title});
export const setContent = (content) => ({type: SET_CONTENT, content});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const addTag = (tag) => ({type: ADD_TAG, tag});

export const getFragment = (token, id) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	fragmentsAPI.getFragment(token, id)
		.then(res => {
			console.log(res);
			dispatch(toggleIsFetching(false));
			dispatch(setFragment(res.data.fragment));
		})
		.catch(() => {
			dispatch(toggleIsFetching(false));
		})
};

export const deleteFragment = (token, id) => () => {
	fragmentsAPI.deleteFragment(token, id)
		.then(res => successNotification(res.data.message))
		.catch(err => console.log(err.response));
};

export const editFragment = (token, id, title, content, tagsIds) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.editFragment(token, id, title, content, tagsIds)
		.then(res => {
			successNotification(res.data.message);
			dispatch(toggleIsFetching(false));
		})
		.catch(() => {
			dispatch(toggleIsFetching(false));
		});
}

export default fragmentReducer;