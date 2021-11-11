const CHANGE_FRAGMENT_TITLE = 'createLesson/CHANGE_FRAGMENT_TITLE';
const ADD_FRAGMENT = 'createLesson/ADD_FRAGMENT';
const CHANGE_SELECT_MODE = 'createLesson/CHANGE_SELECT_MODE';


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
                // fragments: [
                //     ...state.fragments,
                //     {
                //         id: action.fragment.id,
                //         title: action.fragment.title,
                //         type: action.fragment.type
                //     }
                // ]
            }
        case CHANGE_SELECT_MODE:
            return {
                ...state,
                fragments: state.fragments.map(fragment => {
                    if (fragment.id === action.id) {
                        return {
                            ...fragment,
                            isSelected: !fragment.isSelected
                        }
                    }
                    return fragment;
                })
            }
        default:
            return state;
    }
}

export const changeFragmentTitle = (lessonTitle) => ({type: CHANGE_FRAGMENT_TITLE, lessonTitle});

export const addFragment = (fragments) => ({type: ADD_FRAGMENT, fragments});

export const changeSelectedMode = (id) => ({type: CHANGE_SELECT_MODE, id});

export default createLessonReducer;