import {lessonsAPI} from "../api/api";

const SET_CURRENT_PAGE = 'lessonsCatalog/SET_CURRENT_PAGE';
const SET_LESSONS = 'lessonsCatalog/SET_LESSONS';
const TOGGLE_IS_FETCHING = 'lessonsCatalog/TOGGLE_IS_FETCHING';

const initState = {
	lessons: [],
	currentPage: 1,
	nextPage: 1,
	prevPage: 1,
	lastPage: 1,
	lessonsCount: 0,
	isFetching: false
};

const lessonsCatalogReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_LESSONS:
			return {
				...state,
				lessons: action.data.lessons.data,
				lessonsCount: action.data.meta.total,
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

		default:
			return state;
	}
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setLessons = (data) => ({type: SET_LESSONS, data});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const getLessons = (page, title, tags) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	lessonsAPI.getLessons(page, title, tags)
		.then(res => {
			console.log(res);
			dispatch(setLessons(res.data));
			dispatch(setCurrentPage(page));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		})
};

export const changePage = (page, title, tags) => (dispatch) => {
	dispatch(getLessons(page, title, tags));
};

export default lessonsCatalogReducer;