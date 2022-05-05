import {fragmentsAPI} from "../api/api";

const SET_GAMES = 'games/SET_GAMES';
const SET_CURRENT_GAME = 'games/SET_CURRENT_GAME';
const SET_IS_FETCHING = 'games/SET_IS_FETCHING';
const ADD_ASSOCIATION = 'games/ADD_ASSOCIATION';
const GET_ASSOCIATIONS = 'games/GET_ASSOCIATION';
const DELETE_ASSOCIATION = 'games/DELETE_ASSOCIATION';
const SET_ASSOCIATION = 'games/SET_ASSOCIATION';
const ADD_SEQUENCE = 'games/ADD_SEQUENCE';
const GET_SEQUENCE = 'games/GET_SEQUENCE';
const DELETE_SEQUENCE = 'games/DELETE_SEQUENCE';
const SET_SEQUENCE = 'games/SET_SEQUENCE';
const GET_PUZZLES = 'games/GET_PUZZLES';
const SET_PUZZLES_IMAGE = 'games/SET_PUZZLES_IMAGE';
const SET_COLS = 'games/SET_COLS';
const SET_ROWS = 'games/SET_ROWS';
const CLEAR_ALL_FIELDS = 'games/CLEAR_ALL_FIELDS';

const initState = {
    games: undefined,
    isFetching: false,
    currentGame: undefined,
    associations: [],
    sequence: [],
    associationsCount: 0,
    sequenceCount: 0,
    puzzles: {
        image: undefined,
        cols: 3,
        rows: 3
    }
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {...state, games: action.games}
        case SET_CURRENT_GAME:
            return {...state, currentGame: action.game}
        case ADD_ASSOCIATION:
            return {
                ...state,
                associations: [
                    ...state.associations,
                    {id: state.associationsCount, isNew: true, content: Array(2).fill('')}
                ],
                associationsCount: state.associationsCount + 1
            }
        case DELETE_ASSOCIATION:
            return {
                ...state,
                associations: state.associations.filter(a => a.id !== action.id)
            }
        case SET_ASSOCIATION:
            let index = state.associations.findIndex(a => a.id === action.pairId);
            return {
                ...state,
                associations: state.associations.map(a => {
                    if (a.id === action.pairId) {
                        let newContent = action.imageId === 0
                            ? [action.image, state.associations[index].content[1]]
                            : [state.associations[index].content[0], action.image];
                        return {id: a.id, isNew: true, content: newContent};
                    }
                    return a;
                })
            }
        case GET_ASSOCIATIONS:
            let tempAssociations = [];
            for (let i = 0; i < action.data.length; i++) {
                tempAssociations.push({id: i, isNew: false, content: [action.data[i][0], action.data[i][1]]})
            }
            return {
                ...state,
                associations: tempAssociations,
                associationsCount: action.data.length
            }
        case ADD_SEQUENCE:
            let arr = state.sequence?.map(s => Number(s.order));
            return {
                ...state,
                sequence: [
                    ...state.sequence,
                    {
                        id: state.sequenceCount,
                        order: state.sequence.length ? Math.max(...arr) + 1 : 1,
                        //isNew: true,
                        content: undefined
                    }
                ],
                sequenceCount: state.sequenceCount + 1
            }
        case DELETE_SEQUENCE:
            let deleteId = state.sequence.findIndex(i => i.id === action.id);
            let order = state.sequence[deleteId].order
            return {
                ...state,
                sequence: state.sequence.filter(s => s.id !== action.id).map(s => {
                    return s.order > order ? {...s, order: s.order - 1} : s;
                })
            }
        case SET_SEQUENCE:
            return {
                ...state,
                sequence: state.sequence.map(a => {
                    if (a.id === action.imageId) {
                        return {...a, content: action.image};
                    }
                    return a;
                })
            }
        case GET_SEQUENCE:
            let temp = [];
            for (let i = 0; i < action.data.length; i++) {
                temp.push({
                    id: i, order: i + 1,
                    content: action.data[i]
                })
            }
            return {
                ...state,
                sequence: temp,
                sequenceCount: action.data.length
            }
        case GET_PUZZLES:
            return {...state, puzzles: {image: action.data.url, cols: action.data.cols, rows: action.data.rows}}
        case SET_PUZZLES_IMAGE:
            return {...state, puzzles: {...state.puzzles, image: action.image}}
        case SET_COLS:
            return {...state, puzzles: {...state.puzzles, cols: action.cols}}
        case SET_ROWS:
            return {...state, puzzles: {...state.puzzles, rows: action.rows}}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case CLEAR_ALL_FIELDS:
            return {
                ...state,
                isFetching: false,
                currentGame: undefined,
                associations: [],
                sequence: [],
                associationsCount: 0,
                sequenceCount: 0,
                puzzles: {image: undefined, cols: 3, rows: 3}
            };
        default:
            return state;
    }
}

const setGames = (games) => ({type: SET_GAMES, games});
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game});

export const addAssociation = () => ({type: ADD_ASSOCIATION});
export const getAssociations = (data) => ({type: GET_ASSOCIATIONS, data});
export const deleteAssociation = (id) => ({type: DELETE_ASSOCIATION, id});
export const setAssociation = (image, pairId, imageId) => (
    {type: SET_ASSOCIATION, image, pairId, imageId}
);

export const addSequence = () => ({type: ADD_SEQUENCE});
export const getSequence = (data) => ({type: GET_SEQUENCE, data});
export const setSequenceImage = (image, imageId) => ({type: SET_SEQUENCE, image, imageId});
export const deleteSequence = (id) => ({type: DELETE_SEQUENCE, id});

export const getPuzzles = (data) => ({type: GET_PUZZLES, data});
export const setPuzzlesImage = (image) => ({type: SET_PUZZLES_IMAGE, image})
export const setCols = (cols) => ({type: SET_COLS, cols})
export const setRows = (rows) => ({type: SET_ROWS, rows})

const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const clearAllFields = () => ({type: CLEAR_ALL_FIELDS});

export const getGames = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return fragmentsAPI.getGames()
        .then(res => {
            dispatch(setGames(res.data.gameTypes));
            dispatch(toggleIsFetching(false));
        })
        .catch(() => {
            dispatch(toggleIsFetching(false));
        })
};

export default gamesReducer;