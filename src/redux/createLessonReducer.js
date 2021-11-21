import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const CHANGE_FRAGMENT_TITLE = 'createLesson/CHANGE_FRAGMENT_TITLE';
const ADD_FRAGMENT = 'createLesson/ADD_FRAGMENT';
const TOGGLE_IS_FETCHING = 'createLesson/TOGGLE_IS_FETCHING';
const CLEAR_FRAGMENTS = 'createLesson/CLEAR_FRAGMENTS';
const ADD_TAG = 'createLesson/ADD_TAG';
const DELETE_TAG = 'createLesson/DELETE_TAG';


const initState = {
    title: '',
    content: undefined,
    isFetching: false,
    tags: [],
    fragments: [],
};

const createLessonReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FRAGMENT_TITLE:
            return {...state, title: action.lessonTitle};

        case ADD_FRAGMENT:
            return {
                ...state,
                fragments: action.fragments
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case CLEAR_FRAGMENTS:
            return {
                ...state,
                fragments: []
            };

        case ADD_TAG: {
            return {
                ...state,
                tags: [...state.tags, action.tag]
            };
        }

        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const clearFragments = () => ({type: CLEAR_FRAGMENTS});

export const changeFragmentTitle = (lessonTitle) => ({type: CHANGE_FRAGMENT_TITLE, lessonTitle});
export const addFragment = (fragments) => ({type: ADD_FRAGMENT, fragments});

export const createLesson = (title, annotation, fragments, tags) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    lessonsAPI.createLesson(title, annotation, fragments, tags)
        .then(res => {
            dispatch(clearFragments());
            dispatch(changeFragmentTitle(''));
            dispatch(toggleIsFetching(false));
            successNotification(res.data.messages);
        })
        .catch(err => {
            dispatch(toggleIsFetching(false));
            console.log(err.response);
        })
};

export default createLessonReducer;