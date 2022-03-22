const SET_CURRENT_GAME = 'games/SET_CURRENT_GAME';

const initState = {
    games: [
        {
            title:  'Парочки',
            annotation: 'В этой игре вам предстоит найти каждой картинке свою пару',
            type: 'pairs'
        },
        {
            title:  'Филворд',
            annotation: 'В этой игре необходимо найти слова',
            type: 'filword'
        },
        {
            title:  'Найди лишнее',
            annotation: 'В этой игре вам предстоит найти лишнее на каждой картинке',
            type: 'find_extra'
        }
    ],
    isFetching: false,
    currentGame: undefined
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_GAME:
            return {...state, currentGame: action.name}
        default:
            return state;
    }
}

export const setCurrentGame = (name) => ({type: SET_CURRENT_GAME, name});

export default gamesReducer;