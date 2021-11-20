import {fragmentsAPI} from "../api/api";

const SET_ALL_TAGS = 'allTagsReducer/SET_ALL_TAGS';
const SET_TAGS_IDS = 'allTagsReducer/SET_TAGS_IDS';
const SET_IS_FETCHING = 'allTagsReducer/SET_IS_FETCHING';
const ADD_TAG = 'allTagsReducer/ADD_TAG';
const RETURN_TAG = 'allTagsReducer/RETURN_TAG';


const initState = {
    allTags: [],
	currentTagsIds: [],
	isFetching: false
};

const allTagsReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_ALL_TAGS:
			return {
				...state,
				allTags: action.tags.filter(tag => state.currentTagsIds.indexOf(tag.id) === -1)
			};

		case SET_TAGS_IDS:
			return {
				...state,
				currentTagsIds: action.tags.map(tag => tag.id)
			};

		case ADD_TAG:
			return {
				...state,
				currentTagsIds: [...state.currentTagsIds, action.tag.id],
				allTags: state.allTags.filter(tag => tag.id !== action.tag.id)
			};

		case RETURN_TAG:
			return {
				...state,
				currentTagsIds: state.currentTagsIds.filter(id => id !== action.tag.id),
				allTags: [...state.allTags, action.tag]
			};

		case SET_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		default:
			return state;
	}
};

export const setTagsIds = (tags) => ({type: SET_TAGS_IDS, tags});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const returnTag = (tag) => ({type: RETURN_TAG, tag});
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
const setAllTags = (tags) => ({type: SET_ALL_TAGS, tags});

export const getTags = () => (dispatch) => {
	dispatch(setIsFetching(true));
	fragmentsAPI.getTags()
		.then(res => {
			dispatch(setAllTags(res.data.tags.data))
			dispatch(setIsFetching(false))
		})
		.catch(() => dispatch(setIsFetching(false)))
};

export default allTagsReducer;