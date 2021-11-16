import {profileAPI} from "../api/api";

const SET_TEACHERS = 'teachersReducer/SET_TEACHERS';
const TOGGLE_IS_FETCHING = 'teachersReducer/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'teachersReducer/SET_CURRENT_PAGE';


const initState = {
	teachers: [],
	currentPage: 1,
	pageSize: 6,
	totalTeachers: 0,
	prevPage: 1,
	nextPage: 1,
	lastPage: 1,
	isFetching: false
};

const teachersReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_TEACHERS:
			return {
				...state,
				teachers: action.data.creators.data,
				totalTeachers: action.data.meta.total,
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

const setTeachers = (data) => ({type: SET_TEACHERS, data});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getTeachers = (token, page) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	profileAPI.getTeachers(token, page)
		.then(res => {
			console.log(res);
			dispatch(setTeachers(res.data));
			dispatch(setCurrentPage(page));
			dispatch(toggleIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleIsFetching(false));
		})
};

export const changePage = (token, page) => (dispatch) => {
	dispatch(getTeachers(token, page));
};

export default teachersReducer;