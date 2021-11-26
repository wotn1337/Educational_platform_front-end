import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";
import {toggleIsFetching} from "../common/actionCreators";


const TOGGLE_FAVORITE = 'lesson/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'lesson/TOGGLE_FAVORITE_FETCHING';
const SET_LESSON = 'lesson/SET_LESSON';
const TOGGLE_IS_FETCHING = 'lesson/TOGGLE_IS_FETCHING';
const CHANGE_TITLE = 'lesson/CHANGE_TITLE';
const CHANGE_ANNOTATION = 'lesson/CHANGE_ANNOTATION';


const initState = {
	currentFragment: undefined,
	lessonTitle: undefined,
	lessonAnnotation: undefined,
	fragmentsTitles: [],
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
				currentFragment: action.data.fragments.data[0],
				lessonTitle: action.data.fragments.lesson_title,
				lessonAnnotation: action.data.fragments.lesson_annotation,
				fragmentsTitles: action.data.fragments.fragments_title,
				creatorId: action.data.fragments.user_id,
				favorite: action.data.fragments.lesson_favourite,
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

		default:
			return state;
	}
}

const toggleStateFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (isFetching) => ({type: TOGGLE_FAVORITE_FETCHING, isFetching});
const setLesson = (data) => ({type: SET_LESSON, data});

export const changeLessonTitle = (title) => ({type: CHANGE_TITLE, title});
export const changeLessonAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});

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