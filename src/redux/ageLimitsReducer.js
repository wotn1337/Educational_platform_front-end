import {ageLimits} from "../api/api";
import {toggleIsFetching} from "../common/actionCreators";

const prefix = 'ageLimits'
const SET_AGE_LIMITS = prefix + 'SET_AGE_LIMITS'
const TOGGLE_IS_FETCHING = prefix + 'TOGGLE_IS_FETCHING'

const initState = {
	ageLimits: [],
	isFetching: false
}

const ageLimitsReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_AGE_LIMITS:
			return {...state, ageLimits: action.ageLimits}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		default:
			return state
	}
}

const setAgeLimits = (ageLimits) => ({type: SET_AGE_LIMITS, ageLimits})

export const getAgeLimits = () => (dispatch) => {
	dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, true))
	ageLimits.getAgeLimits()
		.then(res => dispatch(setAgeLimits(res.data.ageLimits.data)))
		.finally(() => dispatch(toggleIsFetching(TOGGLE_IS_FETCHING, false)))
}

export default ageLimitsReducer