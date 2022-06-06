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
const SET_SIZE = 'games/SET_SIZE';
const SET_COLOR = 'games/SET_COLOR';
const SET_POINTS = 'games/SET_POINTS'
const SET_LINE_WIDTH = 'games/SET_LINE_WIDTH'
const GET_GRAPH = 'games/GET_GRAPH'

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
	},
	metaImagesData: [],
	graph: {
		width: 5,
		height: 5,
		color: '#000',
		points: [],
		lineWidth: 3
	}
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_GAMES:
			return {...state, games: action.games}
		case SET_CURRENT_GAME:
			return {...state, currentGame: action.game}
		case ADD_ASSOCIATION:
			const newPairContent = [
				{id: state.associationsCount * 2 + 1, url: undefined},
				{id: state.associationsCount * 2 + 2, url: undefined}
			]
			const newMeta = {
				pair: [
					{id: state.associationsCount * 2 + 1, imageName: undefined},
					{id: state.associationsCount * 2 + 2, imageName: undefined}
				],
				id: state.associationsCount
			}
			return {
				...state,
				associations: [
					...state.associations,
					{id: state.associationsCount, content: newPairContent}
				],
				associationsCount: state.associationsCount + 1,
				metaImagesData: [...state.metaImagesData, newMeta]
			}

		case DELETE_ASSOCIATION:
			return {
				...state,
				associations: state.associations.filter(a => a.id !== action.id),
				metaImagesData: state.metaImagesData.filter(meta => meta.id !== action.id)
			}

		case SET_ASSOCIATION:
			const metaPair = {...state.metaImagesData.find(pair => pair.id === action.pairId)}
			const image = metaPair.pair.find(image => image.id === action.imageId)
			delete image.url
			image.imageName = action.image?.name
			return {
				...state,
				associations: state.associations.map(pair => {
					if (pair.id === action.pairId) {
						return {
							...pair,
							content: pair.content.map(image => {
								if (image.id === action.imageId) {
									return {...image, url: action.image}
								}
								return image
							})
						}
					}
					return pair
				}),
				metaImagesData: state.metaImagesData.map(pair => {
					if (pair.id === action.pairId) {
						return metaPair
					}
					return pair
				})
			}

		case GET_ASSOCIATIONS:
			let tempAssociations = action.data.map((pair, index) => ({
				content: pair,
				id: index,
			}))
			return {
				...state,
				associations: tempAssociations,
				associationsCount: action.data.length,
				metaImagesData: action.data.map((pair, index) => ({pair, id: index}))
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
						content: undefined
					}
				],
				sequenceCount: state.sequenceCount + 1,
				metaImagesData: [...state.metaImagesData, {id: state.sequenceCount, imageName: undefined}]
			}
		case DELETE_SEQUENCE:
			let deleteId = state.sequence.findIndex(i => i.id === action.id);
			let order = state.sequence[deleteId].order
			return {
				...state,
				sequence: state.sequence.filter(s => s.id !== action.id).map(s => {
					return s.order > order ? {...s, order: s.order - 1} : s;
				}),
				metaImagesData: state.metaImagesData.filter(image => image.id !== action.id)
			}
		case SET_SEQUENCE:
			const imageData = state.metaImagesData.find(image => image.id === action.imageId)
			delete imageData.url
			imageData.imageName = action.image?.name
			return {
				...state,
				sequence: state.sequence.map(a => {
					if (a.id === action.imageId) {
						return {...a, content: action.image};
					}
					return a;
				}),
				metaImagesData: state.metaImagesData.map(image => {
					if (image.id === action.imageId) {
						return {...imageData};
					}
					return image;
				})
			}
		case GET_SEQUENCE:
			let temp = [];
			let tempMeta = []
			for (let i = 0; i < action.data.length; i++) {
				temp.push({
					id: action.data[i].id,
					order: i + 1,
					content: action.data[i].url
				})
				tempMeta.push({
					id: action.data[i].id,
					url: action.data[i].url
				})
			}
			return {
				...state,
				sequence: temp,
				sequenceCount: action.data.length,
				metaImagesData: tempMeta
			}

		case GET_PUZZLES:
			return {
				...state,
				puzzles: {
					image: action.data[0].url,
					cols: action.data[0].cols,
					rows: action.data[0].rows,
					id: action.data[0].id
				},
				metaImagesData: [...action.data]
			}
		case SET_PUZZLES_IMAGE: {
			const newMeta = {...state.metaImagesData[0]}
			delete newMeta.url
			newMeta.imageName = action.image.name
			return {
				...state,
				puzzles: {...state.puzzles, image: action.image},
				metaImagesData: [newMeta]
			}
		}

		case SET_COLS:
			return {
				...state,
				puzzles: {...state.puzzles, cols: action.cols},
				metaImagesData: [{...state.metaImagesData[0], cols: action.cols}]
			}

		case SET_ROWS:
			return {
				...state,
				puzzles: {...state.puzzles, rows: action.rows},
				metaImagesData: [{...state.metaImagesData[0], rows: action.rows}]
			}

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
				puzzles: {image: undefined, cols: 3, rows: 3},
				graph: {width: 5, height: 5, color: '#000', points: [], lineWidth: 3}
			};

		case SET_SIZE:
			return {
				...state,
				graph: {
					...state.graph,
					[action.dimension]: action.size
				}
			}

		case SET_COLOR:
			return {
				...state,
				graph: {
					...state.graph,
					color: action.color
				}
			}

		case SET_POINTS:
			return {
				...state,
				graph: {
					...state.graph,
					points: action.points
				}
			}

		case SET_LINE_WIDTH:
			return {
				...state,
				graph: {
					...state.graph,
					lineWidth: action.width
				}
			}

		case GET_GRAPH:
			return {
				...state,
				graph: {...action.data}
			}

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

export const getGraph = (data) => ({type: GET_GRAPH, data})
export const setSize = (dimension, size) => ({type: SET_SIZE, dimension, size})
export const setColor = (color) => ({type: SET_COLOR, color})
export const setPoints = (points) => ({type: SET_POINTS, points})
export const setLineWidth = (width) => ({type: SET_LINE_WIDTH, width})

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