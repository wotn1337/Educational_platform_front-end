import {lessonsAPI} from "../api/api";
import {errorNotification, successNotification} from "../notifications/notifications";

const CHANGE_LESSON_TITLE = 'createLesson/CHANGE_LESSON_TITLE';
const SET_FRAGMENTS = 'createLesson/SET_FRAGMENTS';
const TOGGLE_IS_FETCHING = 'createLesson/TOGGLE_IS_FETCHING';
const ADD_TAG = 'createLesson/ADD_TAG';
const DELETE_TAG = 'createLesson/DELETE_TAG';
const CHANGE_ANNOTATION = 'createLesson/CHANGE_ANNOTATION';
const SET_FON = 'createLesson/SET_FON';
const CLEAR_ALL_FIELDS = 'createLesson/CLEAR_ALL_FIELDS';
const SET_ERRORS = 'createLesson/SET_ERRORS';
const DELETE_FRAGMENT = 'createLesson/DELETE_FRAGMENT';
const SET_AGE_LIMIT = 'createLesson/SET_AGE_LIMIT'


const initState = {
    title: '',
    titleError: '',
    annotationError: '',
    fragmentsError: '',
    isFetching: false,
    tags: [],
    fragments: [],
    annotation: '',
    fon: undefined,
    ageLimitId: "1"
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
                titleError: '',
                annotationError: '',
                fragmentsError: '',
            };

        case SET_ERRORS:
            return {
                ...state,
                titleError: action.errors.title,
                annotationError: action.errors.annotation,
                fragmentsError: action.errors.fragments
            }

        case DELETE_FRAGMENT:
            const index = state.fragments.findIndex(elem => elem.id === action.id);
            const deleteNumber = state.fragments[index].order;
            let fragments = state.fragments;
            if (state.fragments.length !== deleteNumber) {
                fragments = state.fragments.map(f => {
                    return (f.order > deleteNumber ? {...f, order: f.order - 1} : f)
                });
            }
            return {
                ...state,
                fragments: fragments.filter(fragment => fragment.id !== action.id)
            };

        case SET_AGE_LIMIT:
            return {...state, ageLimitId: action.ageLimitId}

        default:
            return state;
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setErrors = (errors) => ({type: SET_ERRORS, errors});

export const changeLessonTitle = (lessonTitle) => ({type: CHANGE_LESSON_TITLE, lessonTitle});
export const setFragments = (fragments) => ({type: SET_FRAGMENTS, fragments});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const changeAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});
export const setFon = (fon) => ({type: SET_FON, fon});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});
export const deleteFragment = (id) => ({type: DELETE_FRAGMENT, id});
export const setAgeLimit = (ageLimitId) => ({type: SET_AGE_LIMIT, ageLimitId});

export const createLesson = (title, annotation, fragments, tags, fon, ageLimitId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    lessonsAPI.createLesson(title, annotation, fragments, tags, fon, ageLimitId)
        .then(res => {
            dispatch(clearAllFields());
            successNotification(res.data.messages);
        })
        .catch(err => {
            dispatch(toggleIsFetching(false));
            console.log(err.response);
            if (err.response.status === 422) {
                dispatch(setErrors(err.response.data.errors));
            }
            errorNotification('Что-то пошло не так :(');
        })
};

export default createLessonReducer;