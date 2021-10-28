import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const SET_CONTENT = 'SET_CONTENT';


const initState = {
	title: '',
	content: '',
	questions: []
};

const createTestReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_CONTENT:
			return {...state, content: action.content};
		default:
			return state;
	}
}

const setContent = (content) => ({
	type: SET_CONTENT,
	content
});

export const createTest = (token, type, title, content) => () => {
	fragmentsAPI.createFragment(token, type, title, content)
		.then(res => successNotification(res.data.message))
		.catch(err => console.log(err.response));
}

export default createTestReducer;