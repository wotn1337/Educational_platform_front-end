import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const CHANGE_LESSON_TITLE = 'createLesson/CHANGE_LESSON_TITLE';
const SET_FRAGMENTS = 'createLesson/SET_FRAGMENTS';
const TOGGLE_IS_FETCHING = 'createLesson/TOGGLE_IS_FETCHING';
const CLEAR_FRAGMENTS = 'createLesson/CLEAR_FRAGMENTS';
const ADD_TAG = 'createLesson/ADD_TAG';
const DELETE_TAG = 'createLesson/DELETE_TAG';
const CLEAR_TAGS = 'createLesson/CLEAR_TAGS';
const CHANGE_ANNOTATION = 'createLesson/CHANGE_ANNOTATION';


const initState = {
    title: '',
    isFetching: false,
    tags: [],
    fragments: [],
    annotation: ''
};

const createLessonReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LESSON_TITLE:
            return {...state, title: action.lessonTitle};

        case SET_FRAGMENTS:
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

        case DELETE_TAG: {
            return {
                ...state,
                tags: state.tags.filter(tag => tag.id !== action.tag.id)
            };
        }

        case CLEAR_TAGS: {
            return {
                ...state,
                tags: []
            };
        }

        case CHANGE_ANNOTATION:
            return {
                ...state,
                annotation: action.annotation
            };

        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const clearFragments = () => ({type: CLEAR_FRAGMENTS});
const clearTags = () => ({type: CLEAR_TAGS});

export const changeLessonTitle = (lessonTitle) => ({type: CHANGE_LESSON_TITLE, lessonTitle});
export const setFragments = (fragments) => ({type: SET_FRAGMENTS, fragments});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const changeAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});

export const createLesson = (title, annotation, fragments, tags) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    lessonsAPI.createLesson(title, annotation, fragments, tags)
        .then(res => {
            dispatch(clearFragments());
            dispatch(clearTags());
            dispatch(changeLessonTitle(''));
            dispatch(changeAnnotation(''));
            dispatch(toggleIsFetching(false));
            successNotification(res.data.messages);
        })
        .catch(err => {
            dispatch(toggleIsFetching(false));
            console.log(err.response);
        })
};

export default createLessonReducer;