import {profileAPI} from "../api/api";

const SET_TEACHER_PROFILE = 'teacherProfileReducer/SET_TEACHER_PROFILE';
const SET_PROFILE_FETCHING = 'teacherProfileReducer/SET_PROFILE_FETCHING';


const initState = {
	id: '',
	name: '',
	birthday: '',
	email: '',
	avatar: '',
	fragments: [],
	profileFetching: false
};

const teacherProfileReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_TEACHER_PROFILE:
			return {
				...state,
				id: action.teacher.id,
				name: action.teacher.name,
				birthday: action.teacher.birthday,
				email: action.teacher.email,
				avatar: action.teacher.avatar,
			};

		case SET_PROFILE_FETCHING:
			return {
				...state,
				profileFetching: action.profileFetching
			};

		default:
			return state;
	}
}

const setTeacherProfile = (teacher) => ({type: SET_TEACHER_PROFILE, teacher});
const setProfileFetching = (profileFetching) => ({type: SET_PROFILE_FETCHING, profileFetching});

export const getTeacherProfile = (token, id) => (dispatch) => {
	dispatch(setProfileFetching(true));
	profileAPI.getTeacherProfile(token, id)
		.then(res => {
			console.log(res);
			dispatch(setProfileFetching(false));
		})
		.catch(err => {
			console.log(err.response);
			dispatch(setProfileFetching(false));
		});
}

export default teacherProfileReducer;