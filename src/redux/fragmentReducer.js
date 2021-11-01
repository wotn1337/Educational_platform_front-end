import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_FRAGMENT = 'fragment/SET_FRAGMENT';
const SET_TITLE = 'fragment/SET_TITLE';
const SET_CONTENT = 'fragment/SET_CONTENT';
const SET_IS_FETCHING = 'fragment/SET_IS_FETCHING';


const initState = {
	title: '',
	content: '',
	type: '',
	creator: '',
	creatorId: '',
	isFetching: false
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
			};

		case SET_TITLE:
			return {...state, title: action.title}

		case SET_CONTENT:
			return {...state, content: action.content}

		case SET_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state;
	}
}

const setFragment = (fragment) => ({
	type: SET_FRAGMENT,
	fragment
});

export const setTitle = (title) => ({
	type: SET_TITLE,
	title
});

export const setContent = (content) => ({
	type: SET_CONTENT,
	content
});

const toggleIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	isFetching
})


export const getFragment = (token, id) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	fragmentsAPI.getFragment(token, id)
		.then(res => {
			dispatch(toggleIsFetching(false));
			dispatch(setFragment(res.data.fragment));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		})
};

export const deleteFragment = (token, id) => () => {
	fragmentsAPI.deleteFragment(token, id)
		.then(res => successNotification(res.data.message))
		.catch(err => console.log(err.response));
};

export const editFragment = (token, id, title, content) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	return fragmentsAPI.editFragment(token, id, title, content)
		.then(res => {
			successNotification(res.data.message);
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		});
}

export default fragmentReducer;