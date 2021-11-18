import {fragmentsAPI, profileAPI} from "../api/api";

const SET_TEACHER_PROFILE = 'teacherProfileReducer/SET_TEACHER_PROFILE';
const SET_PROFILE_FETCHING = 'teacherProfileReducer/SET_PROFILE_FETCHING';
const SET_FRAGMENTS = 'teacherProfileReducer/SET_FRAGMENTS';
const TOGGLE_FRAGMENTS_FETCHING = 'teacherProfileReducer/TOGGLE_FRAGMENTS_FETCHING';
const SET_FRAGMENTS_CURRENT_PAGE = 'teacherProfileReducer/SET_FRAGMENTS_CURRENT_PAGE';


const initState = {
	id: '',
	name: '',
	birthday: '',
	avatar: '',
	fragmentsPage: {
		fragments: [],
		currentPage: 1,
		pageSize: 6,
		totalFragmentsCount: 0,
		prevPage: 1,
		nextPage: 1,
		lastPage: 1,
	},
	profileFetching: false,
	fragmentsFetching: false
};

const teacherProfileReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_TEACHER_PROFILE:
			return {
				...state,
				id: action.teacher.id,
				name: action.teacher.name,
				birthday: action.teacher.birthday,
				avatar: action.teacher.avatar,
			};

		case SET_PROFILE_FETCHING:
			return {
				...state,
				profileFetching: action.profileFetching
			};

		case SET_FRAGMENTS:
			return {
				...state,
				fragmentsPage: {
					...state.fragmentsPage,
					fragments: action.data.fragments.data,
					totalFragmentsCount: action.data.meta.total,
					lastPage: action.data.meta.last_page,
					pageSize: action.data.meta.per_page
				}
			};

		case SET_FRAGMENTS_CURRENT_PAGE:
			const prevPage = action.page === 1 ? 1 : action.page - 1;
			const nextPage = action.page === state.fragmentsPage.lastPage ? state.fragmentsPage.lastPage : action.page + 1;
			return {
				...state,
				fragmentsPage: {
					...state.fragmentsPage,
					currentPage: action.page,
					nextPage: nextPage,
					prevPage: prevPage
				}
			};

		case TOGGLE_FRAGMENTS_FETCHING:
			return {
				...state,
				fragmentsFetching: action.fragmentsFetching
			};

		default:
			return state;
	}
}

const setTeacherProfile = (teacher) => ({type: SET_TEACHER_PROFILE, teacher});
const setProfileFetching = (profileFetching) => ({type: SET_PROFILE_FETCHING, profileFetching});
const setFragments = (data) => ({type: SET_FRAGMENTS, data});
const toggleFragmentsFetching = (fragmentsFetching) => ({type: TOGGLE_FRAGMENTS_FETCHING, fragmentsFetching});
const setFragmentsCurrentPage = (page) => ({type: SET_FRAGMENTS_CURRENT_PAGE, page});

export const getTeacherProfile = (id) => (dispatch) => {
	dispatch(setProfileFetching(true));
	profileAPI.getTeacherProfile(id)
		.then(res => {
			dispatch(setTeacherProfile(res.data.creator));
			dispatch(setProfileFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(setProfileFetching(false));
		});
};

export const getTeacherFragments = (id, page) => (dispatch) => {
	dispatch(toggleFragmentsFetching(true));
	fragmentsAPI.getTeacherFragments(id, page)
		.then(res => {
			console.log(res.data);
			dispatch(setFragments(res.data));
			dispatch(setFragmentsCurrentPage(page));
			dispatch(toggleFragmentsFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(toggleFragmentsFetching(false));
		});
};

export const changeFragmentsPage = (id, page) => (dispatch) => {
	dispatch(getTeacherFragments(id, page));
}

export default teacherProfileReducer;