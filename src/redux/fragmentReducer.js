import {fragmentsAPI} from "../api/api";


const SET_FRAGMENT = 'SET_FRAGMENT';


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
				content: action.fragment.content,
				type: action.fragment.type,
				creatorId: action.fragment.user_id,
				creator: action.fragment.user_name,
			};

		default:
			return state;
	}
}

const setFragment = (fragment) => ({
	type: SET_FRAGMENT,
	fragment
})

export const getFragment = (token, id) => (dispatch) => {
	fragmentsAPI.getFragment(token, id)
		.then(res => {
			console.log(res);
			dispatch(setFragment(res.data.fragment));
		})
		.catch(err => console.log(err.response))
};

export default fragmentReducer;