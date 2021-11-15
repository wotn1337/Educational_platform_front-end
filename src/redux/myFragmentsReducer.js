import {fragmentsAPI} from "../api/api";

const SET_FRAGMENTS = 'myFragments/SET_FRAGMENTS';
const SET_CURRENT_PAGE = 'myFragments/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'myFragments/SET_IS_FETCHING';
const SET_SEARCH_TITLE = 'myFragments/SET_SEARCH_TITLE';
const SET_SEARCH_TYPE = 'myFragments/SET_SEARCH_TYPE';


const initState = {
	fragments: [],
	currentPage: 1,
	pageSize: 6,
	totalFragmentsCount: 0,
	prevPage: 1,
	nextPage: 1,
	lastPage: 1,
	isFetching: false,
	searchTitle : '',
	searchType: ''
};

const myFragmentsReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_FRAGMENTS:
			return {
				...state,
				fragments: action.data.fragments.data,
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

		case SET_IS_FETCHING:
			return {...state, isFetching: action.isFetching};

		case SET_SEARCH_TITLE:
			return {
				...state,
				searchTitle: action.searchTitle
			};

		case SET_SEARCH_TYPE:
			return {
				...state,
				searchType: action.searchType
			};

		default:
			return state;
	}
};

const setFragments = (data) => ({
	type: SET_FRAGMENTS,
	data
});

const setIsFetching = (isFetching) => ({
	type: SET_IS_FETCHING,
	isFetching
});

const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	page
});

export const setSearchTitle = (searchTitle) => ({
	type: SET_SEARCH_TITLE,
	searchTitle
});

export const setSearchType = (searchType) => ({
	type: SET_SEARCH_TYPE,
	searchType
});

export const getMyFragments = (token, page, title, type) => (dispatch) => {
	dispatch(setIsFetching(true));
	fragmentsAPI.geMyFragments(token, page, title, type)
		.then(res => {
			dispatch(setFragments(res.data));
			dispatch(setCurrentPage(page));
			dispatch(setIsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(setIsFetching(false));
		})
};

export const changePage = (token, page, title, type) => (dispatch) => {
	dispatch(getMyFragments(token, page, title, type));
};

export default myFragmentsReducer;