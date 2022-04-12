import {fragmentsAPI} from "../api/api";

const SET_GAMES = 'games/SET_GAMES';
const SET_CURRENT_GAME = 'games/SET_CURRENT_GAME';
const SET_IS_FETCHING = 'games/SET_IS_FETCHING';
const ADD_ASSOCIATION = 'games/ADD_ASSOCIATION';
const GET_ASSOCIATIONS = 'games/GET_ASSOCIATION';
const DELETE_ASSOCIATION = 'games/DELETE_ASSOCIATION';
const SET_ASSOCIATION = 'games/SET_ASSOCIATION';
const CLEAR_ALL_FIELDS = 'games/CLEAR_ALL_FIELDS';

const initState = {
    games: undefined,
    isFetching: false,
    currentGame: undefined,
    associations: [],
    associationsCount: 0
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
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case CLEAR_ALL_FIELDS:
            return {
                ...state,
                isFetching: false,
                currentGame: undefined,
                associations: [],
                associationsCount: 0
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