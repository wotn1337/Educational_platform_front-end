import {profileAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";


const SET_PROFILE = 'SET_PROFILE';
const SET_AVATAR = 'SET_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initState = {
    name: '',
    birthday: '',
    email: '',
    id: null,
    role: null,
    isAdmin: false,
    password: null,
    avatar: null,
    isFetching: false
};


const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            const date = action.birthday.split('.');
            return {
                ...state,
                name: action.name,
                birthday: `${date[2]}-${date[1]}-${date[0]}`,
                email: action.email,
                id: action.id,
                role: action.role,
                isAdmin: action.role === 'admin',
                avatar: state.avatar || action.avatar
            };

        case SET_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            };

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

const setProfile = (name, birthday, email, id, role, avatar) => {
    return {
        type: SET_PROFILE,
        name,
        birthday,
        email,
        id,
        role,
        avatar
    };
};

const setAvatar = (avatar) => {
    return {
        type: SET_AVATAR,
        avatar
    };
};


export const getProfile = (token) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getProfile(token)
        .then(res => {
            dispatch(setProfile(
                res.data.user.name,
                res.data.user.birthday,
                res.data.user.email,
                res.data.user.id,
                res.data.user.role,
                res.data.user.avatar
            ));
            dispatch(toggleIsFetching(false));
        })
        .catch(err => {
            console.log(err.response);
            dispatch(toggleIsFetching(false));
        });
};

export const updateProfile = (token, name, birthday) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.updateProfile(token, name, birthday)
        .then(res => {
            dispatch(setProfile(
                res.data.user.name,
                res.data.user.birthday,
                res.data.user.email,
                res.data.user.id,
                res.data.user.role
            ));
            dispatch(toggleIsFetching(false));
            successNotification(res.data.message);
        })
        .catch(err => {
            console.log(err.response);
            dispatch(toggleIsFetching(false));
        });
};

export const updateAvatar = (token, avatar) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.updateAvatar(token, avatar)
        .then(res => {
            dispatch(setAvatar(res.data.avatar));
            dispatch(toggleIsFetching(false));
            successNotification(res.data.message);
        })
        .catch(err => {
            console.log(err.response);
            dispatch(toggleIsFetching(false));
        });
};

export const deleteAvatar = (token) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.deleteAvatar(token)
        .then((res) => {
            dispatch(setAvatar(null));
            dispatch(toggleIsFetching(false));
            successNotification(res.data.message);
        })
        .catch(err => {
            console.log(err.response);
            dispatch(toggleIsFetching(false));
        });
};

export const changePassword = (token, password) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.changePassword(token, password)
        .then(res => {
            dispatch(toggleIsFetching(false));
            successNotification(res.data.message);
        })
        .catch(err => {
            console.log(err.response);
            dispatch(toggleIsFetching(false));
        })
}

export default profileReducer;