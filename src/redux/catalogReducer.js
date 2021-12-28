const TOGGLE_CATALOG = 'catalog/TOGGLE_CATALOG';

const initState = {
	current: 'lessons',
	other: 'fragments'
};

const catalogReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_CATALOG:
			return {
				...state,
				current: state.other,
				other: state.current
			}

		default:
			return state;
	}
}

export const toggleCatalog = () => ({type: TOGGLE_CATALOG})


export default catalogReducer;