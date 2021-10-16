import {profileAPI} from "../api/api";

const CHANGE_FIELD = 'CHANGE_FIELD';
const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
const SET_PROFILE = 'SET_PROFILE';
const SHOW_PASSWORD_FORM = 'SHOW_PASSWORD_FORM';
const SET_AVATAR = 'SET_AVATAR';
const TOGGLE_SWITCHES = 'TOGGLE_SWITCHES';

const initState = {
    showProfileForm: true,
    showPasswordForm: false,
    name: null,
    birthday: null,
    email: null,
    id: null,
    role: null,
    password: null,
    avatar: null,
    isMyPage: true,
    isBlackListUsers: false,
    isAllUsers: false
};


const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.newValue
            };

        case SHOW_EDIT_FORM:
            return {
                ...state,
                showProfileForm: !state.showProfileForm
            };

        case SHOW_PASSWORD_FORM:
            return {
                ...state,
                showPasswordForm: !state.showPasswordForm
            };

        case SET_PROFILE:
            const date = action.birthday.split('.');
            return {
                ...state,
                name: action.name,
                birthday: `${date[2]}-${date[1]}-${date[0]}`,
                email: action.email,
                id: action.id,
                role: action.role,
                avatar: action.avatar
            };

        case SET_AVATAR:
            return {
                ...state,
                avatar: action.avatar
            };

        case TOGGLE_SWITCHES:
            switch (action.tab) {
                case 'myPage':
                    return {
                        ...state,
                        isMyPage: true,
                        isAllUsers: false,
                        isBlackListUsers: false
                    };
                case 'allUsers':
                    return {
                        ...state,
                        isMyPage: false,
                        isAllUsers: true,
                        isBlackListUsers: false
                    };
                case 'blackListUsers':
                    return {
                        ...state,
                        isMyPage: false,
                        isAllUsers: false,
                        isBlackListUsers: true
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
}

export const changeField = (field, newValue) => {
    return {
        type: CHANGE_FIELD,
        field,
        newValue
    }
};

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

export const showProfileForm = () => {
    return {
        type: SHOW_EDIT_FORM
    };
};
export const showPasswordForm = () => {
    return {
        type: SHOW_PASSWORD_FORM
    };
};

export const toggleSwitches = (tab) => {
    return {
        type: TOGGLE_SWITCHES,
        tab
    };
};

export const getProfile = (token) => (dispatch) => {
    profileAPI.getProfile(token)
        .then(res => {
            console.log(res);
            dispatch(setProfile(
                res.data.user.name,
                res.data.user.birthday,
                res.data.user.email,
                res.data.user.id,
                res.data.user.role,
                res.data.user.avatar
            ));
        })
        .catch(err => console.log(err.response));
};

export const updateProfile = (token, name, birthday) => (dispatch) => {
    profileAPI.updateProfile(token, name, birthday)
        .then(res => {
            console.log(res);
            dispatch(setProfile(
                res.data.user.name,
                res.data.user.birthday,
                res.data.user.email,
                res.data.user.id,
                res.data.user.role
            ));
        })
        .catch(err => console.log(err.response));
};

export const updateAvatar = (token, avatar) => (dispatch) => {
    profileAPI.updateAvatar(token, avatar)
        .then(res => {
            dispatch(setAvatar(res.data.avatar));
        })
        .catch(err => console.log(err.response));
};

export const deleteAvatar = (token) => (dispatch) => {
    profileAPI.deleteAvatar(token)
        .then(res => {
            console.log(res);
            dispatch(setAvatar(null));
        })
        .catch(err => console.log(err.response));
};

export default profileReducer;