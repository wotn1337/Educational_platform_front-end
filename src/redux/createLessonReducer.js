const CHANGE_FRAGMENT_TITLE = 'createLesson/CHANGE_FRAGMENT_TITLE';
const ADD_FRAGMENT = 'createLesson/ADD_FRAGMENT';


const initState = {
    title: '',
    content: undefined,
    isFetching: false,
    fragments: [
        {
            id: 1,
            type: 'article',
            title: 'Истрия алфавита'
        },
        {
            id: 2,
            type: 'video',
            title: 'Учимся произносить шипящие'
        },
        {
            id: 3,
            type: 'test',
            title: 'Разгадай-ка!'
        },
        {
            id: 3,
            type: 'article',
            title: 'Домашнее задание'
        }
    ]
};

const createLessonReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FRAGMENT_TITLE:
            return {...state, title: action.fragmentTitle};
        case ADD_FRAGMENT:
            return {
                ...state,
                fragments: [
                    ...state.fragments,
                    {
                        id: 1,
                        type: 'article',
                        title: 'Урок'
                    }
                ]
            }
        default:
            return state;
    }
}

export const changeFragmentTitle = (fragmentTitle) => ({type: CHANGE_FRAGMENT_TITLE, fragmentTitle});

export const addFragment = () => ({type: ADD_FRAGMENT});

export default createLessonReducer;