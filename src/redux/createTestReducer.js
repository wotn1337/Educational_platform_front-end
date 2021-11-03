import {fragmentsAPI} from "../api/api";
import {successNotification} from "../notifications/notifications";

const ADD_QUESTIONS = 'ADD_QUESTIONS';
const CHANGE_ANSWER = 'CHANGE_ANSWER';
const CHANGE_ANSWER_EDIT_MODE = 'CHANGE_ANSWER_EDIT_MODE';
const CHANGE_ANSWER_SELECTED_MODE = 'CHANGE_ANSWER_SELECTED_MODE';
const ADD_ANSWER = 'ADD_ANSWER';
const DELETE_ANSWER = 'DELETE_ANSWER';
const DELETE_QUESTION = 'DELETE_QUESTION';
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
            answersCount: 2,
            option: 'Один вариант',
            answers: [
                {
                    id: 1,
                    content: 'Вариант 1',
                    isEdit: false,
                    isSelected: false
                },
                {
                    id: 2,
                    content: 'Вариант 2',
                    isEdit: false,
                    isSelected: false
                }
            ]
        }
    ]
};

const createTestReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_QUESTIONS:
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id: state.questionsCount + 1,
                        question: action.question.question,
                        answersCount: action.question.answersCount,
                        option: action.question.option,
                        answers: [action.question.answers]
                    }],
                questionsCount: state.questionsCount + 1
            };
        case CHANGE_QUESTION:
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
        case DELETE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(question => (
                    question.id !== action.question_id))
            };
        case ADD_ANSWER:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.id) {
                        return {
                            ...question,
                            answers: [
                                ...question.answers,
                                {
                                    id: question.answersCount + 1,
                                    content: `Вариант ${question.answersCount + 1}`,
                                    isEdit: false,
                                    isSelected: false
                                }
                            ],
                            answersCount: question.answersCount + 1
                        }
                    }
                    return question;
                })
            };
        case CHANGE_ANSWER:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.question_id) {
                        question.answers = question.answers.map(answer => {
                            if (answer.id === action.answer_id) {
                                return {
                                    ...answer,
                                    content: action.answer
                                }
                            }
                            return answer;
                        })
                    }
                    return question;
                })
            };
        case DELETE_ANSWER:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.question_id) {
                        question.answers = question.answers.filter(answer =>
                            answer.id !== action.answer_id);
                    }
                    return question;
                })
            };
        case CHANGE_ANSWER_EDIT_MODE:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.question_id) {
                        question.answers = question.answers.map(answer => {
                            if (answer.id === action.answer_id) {
                                return {
                                    ...answer,
                                    isEdit: !answer.isEdit
                                }
                            }
                            return answer;
                        })
                    }
                    return question;
                })
            };
        case CHANGE_ANSWER_SELECTED_MODE:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.question_id) {
                        question.answers = question.answers.map(answer => {
                            if (answer.id === action.answer_id) {
                                return {
                                    ...answer,
                                    isSelected: !answer.isSelected
                                }
                            }
                            return answer;
                        })
                    }
                    return question;
                })
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
        default:
            return state;
    }
}

export const addQuestion = (question) => ({
    type: ADD_QUESTIONS,
    question
});

export const changeQuestion = (id, question) => ({
    type: CHANGE_QUESTION,
    id,
    question
});

export const deleteQuestion = (question_id) => ({
    type: DELETE_QUESTION,
    question_id
});

export const addAnswer = (id) => ({
    type: ADD_ANSWER,
    id
});

export const changeAnswer = (question_id, answer_id, answer) => ({
    type: CHANGE_ANSWER,
    question_id,
    answer_id,
    answer
});

export const deleteAnswer = (question_id, answer_id) => ({
    type: DELETE_ANSWER,
    question_id,
    answer_id
});

export const changeEditMode = (question_id, answer_id) => ({
    type: CHANGE_ANSWER_EDIT_MODE,
    question_id,
    answer_id
});

export const changeSelectedMode = (question_id, answer_id) => ({
    type: CHANGE_ANSWER_SELECTED_MODE,
    question_id,
    answer_id
});

export const changeOption = (id, option) => ({
    type: CHANGE_OPTION,
    id,
    option
});

export const createTest = (token, type, title, content) => () => {
    fragmentsAPI.createFragment(token, type, title, content)
        .then(res => successNotification(res.data.message))
        .catch(err => console.log(err.response));
}


export default createTestReducer;