import {lessonsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const CHANGE_LESSON_TITLE = 'createLesson/CHANGE_LESSON_TITLE';
const SET_FRAGMENTS = 'createLesson/SET_FRAGMENTS';
const TOGGLE_IS_FETCHING = 'createLesson/TOGGLE_IS_FETCHING';
const ADD_TAG = 'createLesson/ADD_TAG';
const DELETE_TAG = 'createLesson/DELETE_TAG';
const CHANGE_ANNOTATION = 'createLesson/CHANGE_ANNOTATION';
const SET_FON = 'createLesson/SET_FON';
const CLEAR_ALL_FIELDS = 'createLesson/CLEAR_ALL_FIELDS';


const initState = {
    title: '',
    isFetching: false,
    tags: [],
    fragments: [],
    annotation: '',
    fon: undefined,
};

const createLessonReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LESSON_TITLE:
            return {...state, title: action.lessonTitle};

        case SET_FRAGMENTS:
            return {...state, fragments: action.fragments};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case ADD_TAG:
            return {...state, tags: [...state.tags, action.tag]};

        case DELETE_TAG:
            return {
                ...state,
                tags: state.tags.filter(tag => tag.id !== action.tag.id)
            };

        case CHANGE_ANNOTATION:
            return {...state, annotation: action.annotation};

        case SET_FON:
            return {...state, fon: action.fon};

        case CLEAR_ALL_FIELDS:
            return {
                ...state,
                title: '',
                isFetching: false,
                tags: [],
                fragments: [],
                annotation: '',
                fon: undefined,
            };

        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const changeLessonTitle = (lessonTitle) => ({type: CHANGE_LESSON_TITLE, lessonTitle});
export const setFragments = (fragments) => ({type: SET_FRAGMENTS, fragments});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const changeAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});
export const setFon = (fon) => ({type: SET_FON, fon});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});

export const createLesson = (title, annotation, fragments, tags, fon) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    lessonsAPI.createLesson(title, annotation, fragments, tags, fon)
        .then(res => {
            dispatch(clearAllFields());
            successNotification(res.data.messages);
        })
        .catch(err => {
            dispatch(toggleIsFetching(false));
            console.log(err.response);
        })
};

export default createLessonReducer;