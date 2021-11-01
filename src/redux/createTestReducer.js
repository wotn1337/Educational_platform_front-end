import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const SET_CONTENT = 'SET_CONTENT';
const SET_QUESTIONS = 'SET_QUESTIONS';
const CHANGE_OPTION = 'CHANGE_OPTION';
const CHANGE_QUESTION = 'CHANGE_QUESTION';


const initState = {
    title: '',
    content: '',
    questionsCount: 1,
    questions: [
        {
            id: 1,
            question: '',
            option: 'Один вариант',
            answers: ['Вариант 1', 'Вариант 2']
        }
    ]
};

const createTestReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {...state, content: action.content};
        case SET_QUESTIONS:
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id: state.questionsCount + 1,
                        question: action.question.question,
                        option: action.question.option,
                        answers: [action.question.answers]
                    }],
                questionsCount: state.questionsCount + 1
            };
        case CHANGE_OPTION:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.id) {
                        return {
                            ...question,
                            option: action.option
                        }
                    }
                    return question;
                })
            };
        case CHANGE_QUESTION:
            debugger
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.id) {
                        return {
                            ...question,
                            question: action.question
                        }
                    }
                    return question;
                })
            };
        default:
            return state;
    }
}

const setContent = (content) => ({
    type: SET_CONTENT,
    content
});

export const setQuestion = (question) => ({
    type: SET_QUESTIONS,
    question
});

export const changeOption = (id, option) => ({
    type: CHANGE_OPTION,
    id,
    option
});

export const changeQuestion = (id, question) => ({
    type: CHANGE_QUESTION,
    id,
    question
});

export const createTest = (token, type, title, content) => () => {
    fragmentsAPI.createFragment(token, type, title, content)
        .then(res => successNotification(res.data.message))
        .catch(err => console.log(err.response));
}


export default createTestReducer;