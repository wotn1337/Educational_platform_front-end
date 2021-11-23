import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";
import {toggleIsFetching} from "../common/actionCreators";


const TOGGLE_FAVORITE = 'lesson/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'lesson/TOGGLE_FAVORITE_FETCHING';
const SET_LESSON = 'lesson/SET_LESSON';
const TOGGLE_IS_FETCHING = 'lesson/TOGGLE_IS_FETCHING';


const initState = {
	currentFragment: undefined,
	fragmentsTitles: [],
	favorite: false,
	favoriteFetching: false,
	isFetching: false
};

const lessonReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_LESSON:
			return {
				...state,
				currentFragment: action.data.fragments.data[0],
				fragmentsTitles: action.data.fragments.fragments_title
			};

		case TOGGLE_FAVORITE:
			return {...state, favorite: !state.favorite};

		case TOGGLE_FAVORITE_FETCHING:
			return {...state, favoriteFetching: action.isFetching};

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		default:
			return state;
	}
}

const toggleStateFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (isFetching) => ({type: TOGGLE_FAVORITE_FETCHING, isFetching});
const setLesson = (data) => ({type: SET_LESSON, data});

export const getLesson = (id, fragmentOrderNumber) => (dispatch) => {
	dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, true));
	lessonsAPI.getLesson(id, fragmentOrderNumber)
		.then(res => {
			console.log(res);
			dispatch(setLesson(res.data));
			dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, false));
		})
}

export const deleteLesson = (id) => () => {
    lessonsAPI.deleteLesson(id)
	    .then(res => successNotification(res.data.message))
	    .catch(err => console.error(err))
}

export const toggleFavorite = (id) => (dispatch) => {
	dispatch(toggleFavoriteFetching(true));
	lessonsAPI.toggleFavorite(id)
		.then(() => {
			dispatch(toggleStateFavorite());
			dispatch(toggleFavoriteFetching(false));
		})
}

export default lessonReducer;