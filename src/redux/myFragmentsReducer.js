import {fragmentsAPI} from "../api/api";

const SET_FRAGMENTS = 'SET_FRAGMENTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initState = {
	fragments: [],
	currentPage: 1,
	pageSize: 6,
	totalFragmentsCount: 0,
	prevPage: 1,
	nextPage: 1,
	lastPage: 1,
	isFetching: false
};

const myFragmentsReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRAGMENTS:
			return {
				...state,
				fragments: action.data.fragments,
				totalFragmentsCount: action.data.meta.total,
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

		default:
			return state;
	}
};

const setFragments = (data) => ({
	type: SET_FRAGMENTS,
	data
});

const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	page
});

export const getFragments = (token, page) => (dispatch) => {
	fragmentsAPI.getFragments(token, page)
		.then(res => {
			console.log(res);
			dispatch(setFragments(res.data));
			dispatch(setCurrentPage(page));
		})
		.catch(err => console.log(err.response))
};

export const changePage = (token, page) => (dispatch) => {
	dispatch(getFragments(token, page));
};

export default myFragmentsReducer;