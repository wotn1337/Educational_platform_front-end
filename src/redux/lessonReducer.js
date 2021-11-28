import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";
import {toggleIsFetching} from "../common/actionCreators";


const TOGGLE_FAVORITE = 'lesson/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'lesson/TOGGLE_FAVORITE_FETCHING';
const SET_LESSON = 'lesson/SET_LESSON';
const TOGGLE_IS_FETCHING = 'lesson/TOGGLE_IS_FETCHING';
const CHANGE_TITLE = 'lesson/CHANGE_TITLE';
const CHANGE_ANNOTATION = 'lesson/CHANGE_ANNOTATION';
const SET_CURRENT_FRAGMENT = 'lesson/SET_CURRENT_FRAGMENT';


const initState = {
	currentFragment: undefined,
	fragments: [],
	lessonTitle: undefined,
	lessonAnnotation: undefined,
	favorite: false,
	favoriteFetching: false,
	isFetching: false,
	creatorId: undefined
};

const lessonReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_LESSON:
			return {
				...state,
				fragments: action.data.lesson.fragments.data,
				lessonTitle: action.data.lesson.title,
				lessonAnnotation: action.data.lesson.annotation,
				creatorId: action.data.lesson.user_id,
				favorite: action.data.lesson.favourite,
			};

		case TOGGLE_FAVORITE:
			return {...state, favorite: !state.favorite};

		case TOGGLE_FAVORITE_FETCHING:
			return {...state, favoriteFetching: action.isFetching};

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		case CHANGE_TITLE:
			return {...state, lessonTitle: action.title};

		case CHANGE_ANNOTATION:
			return {...state, lessonAnnotation: action.annotation};

		case SET_CURRENT_FRAGMENT:
			return {...state, currentFragment: state.fragments[action.orderNumber - 1]};

		default:
			return state;
	}
}

const toggleStateFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (isFetching) => ({type: TOGGLE_FAVORITE_FETCHING, isFetching});
const setLesson = (data) => ({type: SET_LESSON, data});

export const changeLessonTitle = (title) => ({type: CHANGE_TITLE, title});
export const changeLessonAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});
export const setCurrentFragment = (orderNumber) => ({type: SET_CURRENT_FRAGMENT, orderNumber});

export const getLesson = (id) => (dispatch) => {
	dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, true));
	lessonsAPI.getLesson(id)
		.then(res => {
			console.log(res);
			dispatch(setLesson(res.data));
			dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, false));
		})
}

export const deleteLesson = (id) => () => {
    return lessonsAPI.deleteLesson(id)
	    .then(res => successNotification(res.data.message))
	    .catch(err => console.error(err))
}

export const toggleFavorite = (id) => (dispatch) => {
	dispatch(toggleFavoriteFetching(true));
	return lessonsAPI.toggleFavorite(id)
		.then(() => {
			dispatch(toggleStateFavorite());
			dispatch(toggleFavoriteFetching(false));
		})
}

export default lessonReducer;