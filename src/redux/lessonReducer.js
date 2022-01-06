import {lessonsAPI} from "../api/api";
import {errorNotification, successNotification} from "../notifications/notifications";
import {toggleIsFetching} from "../common/actionCreators";


const TOGGLE_FAVORITE = 'lesson/TOGGLE_FAVORITE';
const TOGGLE_FAVORITE_FETCHING = 'lesson/TOGGLE_FAVORITE_FETCHING';
const SET_LESSON = 'lesson/SET_LESSON';
const TOGGLE_IS_FETCHING = 'lesson/TOGGLE_IS_FETCHING';
const CHANGE_TITLE = 'lesson/CHANGE_TITLE';
const CHANGE_ANNOTATION = 'lesson/CHANGE_ANNOTATION';
const SET_CURRENT_FRAGMENT = 'lesson/SET_CURRENT_FRAGMENT';
const SET_FRAGMENTS = 'lesson/SET_FRAGMENTS';
const ADD_TAG = 'lesson/ADD_TAG';
const DELETE_TAG = 'lesson/DELETE_TAG';
const CHANGE_FRAGMENT = 'lesson/CHANGE_FRAGMENT';
const TOGGLE_CURRENT_FRAGMENT_FAVORITE = 'lesson/TOGGLE_CURRENT_FRAGMENT_FAVORITE';
const CLEAR_ALL_FIELDS = 'lesson/CLEAR_ALL_FIELDS';
const DELETE_FRAGMENT = 'lesson/DELETE_FRAGMENT';

const initState = {
    currentFragment: undefined,
    fragments: [],
    lessonTitle: undefined,
    lessonAnnotation: undefined,
    favorite: false,
    favoriteFetching: false,
    isFetching: false,
    creatorId: undefined,
    creatorName: '',
    creatorAvatar: undefined,
    tags: [],
    fon: undefined,
    allFragmentsCount: 0,
    prevFragmentOrder: -1,
    nextFragmentOrder: 0,
    currentFragmentId: undefined
};

const lessonReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LESSON:
            return {
                ...state,
                fragments: action.data.lesson.fragments.data,
                lessonTitle: action.data.lesson.title,
                lessonAnnotation: action.data.lesson.annotation,
                creatorId: action.data.lesson.user_id,
                creatorName: action.data.lesson.user_name,
                creatorAvatar: action.data.lesson.user_avatar,
                favorite: action.data.lesson.favourite,
                tags: action.data.lesson.tags ? action.data.lesson.tags.data : [],
                fon: action.data.lesson.fon,
                allFragmentsCount: action.data.lesson.fragments.all_count,
            };

        case TOGGLE_FAVORITE:
            return {...state, favorite: !state.favorite};
        case TOGGLE_FAVORITE_FETCHING:
            return {...state, favoriteFetching: action.isFetching};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case CHANGE_TITLE:
            return {...state, lessonTitle: action.title};
        case CHANGE_ANNOTATION:
            return {...state, lessonAnnotation: action.annotation};
        case SET_CURRENT_FRAGMENT:
            return {
                ...state,
                currentFragment: action.orderNumber === -1 ? undefined : {...state.fragments[action.orderNumber]},
                prevFragmentOrder: action.orderNumber === -1 ? -1 : action.orderNumber - 1,
                nextFragmentOrder: action.orderNumber === state.fragments.length - 1 ? action.orderNumber : action.orderNumber + 1,
            };
        case SET_FRAGMENTS:
            return {...state, fragments: action.fragments};
        case ADD_TAG:
            return {...state, tags: [...state.tags, action.tag]};
        case DELETE_TAG:
            return {...state, tags: state.tags.filter(tag => tag.id !== action.tag.id)};

        case TOGGLE_CURRENT_FRAGMENT_FAVORITE:
            return {
                ...state,
                currentFragment: {
                    ...state.currentFragment,
                    favourite: !state.currentFragment.favourite
                },
                fragments: state.fragments.map(fragment => {
                    if (fragment.id === state.currentFragment.id) {
                        return {...fragment, favourite: !fragment.favourite};
                    }
                    return fragment;
                })
            };

        case CLEAR_ALL_FIELDS:
            return {
                currentFragment: undefined,
                fragments: [],
                lessonTitle: undefined,
                lessonAnnotation: undefined,
                favorite: false,
                favoriteFetching: false,
                isFetching: false,
                creatorId: undefined,
                creatorName: '',
                creatorAvatar: undefined,
                tags: [],
                fon: undefined,
                allFragmentsCount: 0,
                prevFragmentOrder: -1,
                nextFragmentOrder: 0,
                currentFragmentId: undefined
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
        default:
            return state;
    }
}
const toggleStateFavorite = () => ({type: TOGGLE_FAVORITE});
const toggleFavoriteFetching = (isFetching) => ({type: TOGGLE_FAVORITE_FETCHING, isFetching});
const setLesson = (data) => ({type: SET_LESSON, data});

export const changeLessonTitle = (title) => ({type: CHANGE_TITLE, title});
export const changeLessonAnnotation = (annotation) => ({type: CHANGE_ANNOTATION, annotation});
export const setCurrentFragment = (orderNumber) => ({type: SET_CURRENT_FRAGMENT, orderNumber});
export const setFragments = (fragments) => ({type: SET_FRAGMENTS, fragments});
export const addTag = (tag) => ({type: ADD_TAG, tag});
export const deleteTag = (tag) => ({type: DELETE_TAG, tag});
export const changeFragment = (order) => ({type: CHANGE_FRAGMENT, order});
export const toggleCurrentFragmentFavorite = () => ({type: TOGGLE_CURRENT_FRAGMENT_FAVORITE});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});
export const deleteFragment = (id) => ({type: DELETE_FRAGMENT, id});

export const getLesson = (id) => (dispatch) => {
    dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, true));
    lessonsAPI.getLesson(id)
        .then(res => {
            console.log(res);
            dispatch(setLesson(res.data));
            dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, false));
        })
        .catch(() => errorNotification('Что-то пошло не так ('))
}
export const deleteLesson = (id) => () => {
    return lessonsAPI.deleteLesson(id)
        .then(res => successNotification(res.data.message))
        .catch(err => console.error(err))
}
export const toggleFavorite = (id) => (dispatch) => {
    dispatch(toggleFavoriteFetching(true));
    return lessonsAPI.toggleFavorite(id)
        .then(() => {
            dispatch(toggleStateFavorite());
            dispatch(toggleFavoriteFetching(false));
        })
}
export const updateLesson = (id, title, annotation, fragments, tags) => (dispatch) => {
    dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, true));
    return lessonsAPI.updateLesson(id, title, annotation, fragments, tags)
        .then(res => {
            dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, false));
            successNotification(res.data.messages);
        })
        .catch(err => {
            console.log(err.response);
            errorNotification('Что-то пошло не так (');
        })
}
export default lessonReducer;