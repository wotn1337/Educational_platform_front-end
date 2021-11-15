const CHANGE_FRAGMENT_TITLE = 'createLesson/CHANGE_FRAGMENT_TITLE';
const ADD_FRAGMENT = 'createLesson/ADD_FRAGMENT';


const initState = {
    title: '',
    content: undefined,
    isFetching: false,
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
        default:
            return state;
    }
}

export const changeFragmentTitle = (lessonTitle) => ({type: CHANGE_FRAGMENT_TITLE, lessonTitle});

export const addFragment = (fragments) => ({type: ADD_FRAGMENT, fragments});

export default createLessonReducer;