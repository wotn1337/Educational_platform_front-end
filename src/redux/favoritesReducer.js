import {fragmentsAPI} from "../api/api";

const SET_FRAGMENTS = 'favorite/SET_FRAGMENTS';
const SET_IS_FETCHING = 'favorite/SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'favorite/SET_CURRENT_PAGE';
const SET_SEARCH_TITLE = 'favorite/SET_SEARCH_TITLE';
const SET_SEARCH_TYPE = 'favorite/SET_SEARCH_TYPE';
const DELETE_FRAGMENT = 'favorite/DELETE_FRAGMENT';

const initState = {
    favorites: [],
    currentPage: 1,
    pageSize: 6,
    prevPage: 1,
    nextPage: 1,
    lastPage: 1,
    isFetching: false,
    searchTitle: '',
    searchType: '',
    totalFragmentsCount: 0
};

const favoritesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FRAGMENTS:
            return {
                ...state,
                favorites: action.data.fragments.data,
                lastPage: action.data.meta.last_page,
                pageSize: action.data.meta.per_page,
                totalFragmentsCount: action.data.meta.total
            };
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_CURRENT_PAGE:
            const prevPage = action.page === 1 ? 1 : action.page - 1;
            const nextPage = action.page === state.lastPage ? state.lastPage : action.page + 1;
            return {
                ...state,
                currentPage: action.page,
                nextPage: nextPage,
                prevPage: prevPage
            };
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
        case DELETE_FRAGMENT:
            return {
                ...state,
                favorites: state.favorites.filter(f => f.id !== action.id)
            };
        default:
            return state;
    }
}

const setFragments = (data) => ({type: SET_FRAGMENTS, data});

const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export const setSearchTitle = (searchTitle) => ({type: SET_SEARCH_TITLE, searchTitle});

export const setSearchType = (searchType) => ({type: SET_SEARCH_TYPE, searchType});

export const deleteFragment = (id) => ({type: DELETE_FRAGMENT, id});

export const getFavorites = (page, title, type) => (dispatch) => {
    dispatch(setIsFetching(true));
    fragmentsAPI.getFavorites(page, title, type)
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

export const changePage = (page, title, type) => (dispatch) => {
    dispatch(getFavorites(page, title, type));
};

export const changeFavorite = (id) => (dispatch) => {
    return fragmentsAPI.changeFavorite(id)
        .then(() => {
            dispatch(deleteFragment(id));
        })
        .catch(() => {
        })
};

export default favoritesReducer;