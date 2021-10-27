import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_FRAGMENT = 'SET_FRAGMENT';
const SET_TITLE = 'SET_TITLE';
const SET_CONTENT = 'SET_CONTENT';


const initState = {
	title: '',
	content: '',
	type: '',
	creator: '',
	creatorId: ''
};

const fragmentReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRAGMENT:
			return {
				...state,
				title: action.fragment.title,
				content: JSON.parse(action.fragment.content),
				type: action.fragment.type,
				creatorId: action.fragment.user_id,
				creator: action.fragment.user_name,
			};

		case SET_TITLE:
			return {...state, title: action.title}

		case SET_CONTENT:
			return {...state, content: JSON.stringify(action.content)}

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

export const getFragment = (token, id) => (dispatch) => {
	fragmentsAPI.getFragment(token, id)
		.then(res => {
			console.log(res);
			dispatch(setFragment(res.data.fragment));
		})
		.catch(err => console.log(err.response))
};

export const deleteFragment = (token, id) => () => {
	fragmentsAPI.deleteFragment(token, id)
		.then(res => successNotification(res.data.message))
		.catch(err => console.log(err.response));
};

export const editFragment = (token, id, title, content) => () => {
	return fragmentsAPI.editFragment(token, id, title, content)
		.then(res => {
			successNotification(res.data.message);
		})
		.catch(err => console.log(err.response));
}

export default fragmentReducer;