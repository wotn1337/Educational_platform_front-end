import {fragmentsAPI} from "../api/api";

const SET_GAMES = 'games/SET_GAMES';
const SET_CURRENT_GAME = 'games/SET_CURRENT_GAME';
const SET_IS_FETCHING = 'games/SET_IS_FETCHING';

const initState = {
    games: undefined,
    isFetching: false,
    currentGame: undefined
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {...state, games: action.games}
        case SET_CURRENT_GAME:
            return {...state, currentGame: action.game}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

const setGames = (games) => ({type: SET_GAMES, games});
export const setCurrentGame = (game) => ({type: SET_CURRENT_GAME, game});
const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

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