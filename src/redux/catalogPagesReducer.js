const TOGGLE = 'catalogPagesReducer/TOGGLE';

const initState = {
	catalog: {current: 'lessons', other: 'fragments'},
	myMaterials: {current: 'lessons', other: 'fragments'},
	favorite: {current: 'lessons', other: 'fragments'}
};

const catalogPagesReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE:
			return {
				...state,
				[action.page]: {
					...[action.page],
					current: state[action.page].other,
					other: state[action.page].current
				}
			};

		default:
			return state;
	}
}

export const togglePage = (page) => ({type: TOGGLE, page});

export default catalogPagesReducer;