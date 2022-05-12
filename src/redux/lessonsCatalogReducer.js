import {lessonsAPI} from "../api/api";

const SET_CURRENT_PAGE = 'lessonsCatalog/SET_CURRENT_PAGE';
const SET_LESSONS = 'lessonsCatalog/SET_LESSONS';
const TOGGLE_IS_FETCHING = 'lessonsCatalog/TOGGLE_IS_FETCHING';
const CHANGE_SEARCH_LESSON_TITLE = 'lessonsCatalog/CHANGE_SEARCH_LESSON_TITLE';
const CHANGE_SEARCH_TEACHER_NAME = 'lessonsCatalog/CHANGE_SEARCH_TEACHER_NAME';
const ADD_TAG = 'lessonsCatalog/ADD_TAG';
const DELETE_TAG = 'lessonsCatalog/DELETE_TAG';
const CLEAR_SEARCH_FIELDS = 'lessonsCatalog/CLEAR_SEARCH_FIELDS';
const SET_AGE_LIMIT = 'lessonCatalog/SET_AGE_LIMIT'

const initState = {
	lessons: [],
	currentPage: 1,
	nextPage: 1,
	prevPage: 1,
	lastPage: 1,
	lessonsCount: 0,
	allLessonsCount: 0,
	isFetching: false,
	searchLessonTitle: '',
	searchTeacherName: '',
	searchTags: [],
	ageLimitId: null
};

const lessonsCatalogReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_LESSONS:
			return {
				...state,
				lessons: action.data.lessons.data,
				lessonsCount: action.data.meta.total,
				allLessonsCount: action.data.lessons.all_count,
				lastPage: action.data.meta.last_page,
				pageSize: action.data.meta.per_page
			};

		case SET_CURRENT_PAGE:
			const prevPage = action.page === 1 ? 1 : action.page - 1;
			const nextPage = action.page === state.lastPage ? state.lastPage : action.page + 1;
			return {
				...state,
				currentPage: action.page,
				nextPage: nextPage,
				prevPage: prevPage
			};

		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};

		case CHANGE_SEARCH_LESSON_TITLE:
			return {...state, searchLessonTitle: action.title};

		case CHANGE_SEARCH_TEACHER_NAME:
			return {...state, searchTeacherName: action.name};

		case ADD_TAG:
			return {...state, searchTags: [...state.searchTags, action.tag]};

		case DELETE_TAG:
			return {...state, searchTags: state.searchTags.filter(tag => tag.id !== action.tag.id)};

		case CLEAR_SEARCH_FIELDS:
			return {
				...state,
				searchLessonTitle: '',
				searchTeacherName: '',
				searchTags: [],
				ageLimitId: null
			};

		case SET_AGE_LIMIT:
			return {...state, ageLimitId: action.ageLimitId}

		default:
			return state;
	}
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setLessons = (data) => ({type: SET_LESSONS, data});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const changeSearchLessonTitle = (title) => ({type: CHANGE_SEARCH_LESSON_TITLE, title});
export const changeSearchTeacherName = (name) => ({type: CHANGE_SEARCH_TEACHER_NAME, name});
export const addSearchTag = (tag) => ({type: ADD_TAG, tag});
export const deleteSearchTag = (tag) => ({type: DELETE_TAG, tag});
export const clearSearchFields = () => ({type: CLEAR_SEARCH_FIELDS});
export const setAgeLimit = (ageLimitId) => ({type: SET_AGE_LIMIT, ageLimitId});

export const getLessons = (page, pageNumber, title, teacherName, tags, teacherId, ageLimitId) => (dispatch) => {
	let getLessonsFunction;
	switch (page) {
		case 'favorite':
			getLessonsFunction = lessonsAPI.getFavoriteLessons;
			break;

		case 'catalog':
			getLessonsFunction = lessonsAPI.getLessons;
			break;

		case 'my-lessons':
			getLessonsFunction = lessonsAPI.getMyLessons;
			break;

		case 'teacher':
			getLessonsFunction = lessonsAPI.getTeacherLessons;
			break;

		default:
			getLessonsFunction = lessonsAPI.getLessons;
			break;
	}
	dispatch(toggleIsFetching(true));
	if (page !== 'teacher') {
		getLessonsFunction(pageNumber, title, teacherName, tags, ageLimitId)
			.then(res => {
				dispatch(setLessons(res.data));
				dispatch(setCurrentPage(pageNumber));
				dispatch(toggleIsFetching(false));
			})
			.catch(err => {
				console.log(err.response);
				dispatch(toggleIsFetching(false));
			})
	} else {
		getLessonsFunction(teacherId, pageNumber)
			.then(res => {
				dispatch(setLessons(res.data));
				dispatch(setCurrentPage(pageNumber));
				dispatch(toggleIsFetching(false));
			})
			.catch(err => {
				console.log(err.response);
				dispatch(toggleIsFetching(false));
			})
	}
};

export default lessonsCatalogReducer;