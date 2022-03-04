import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import adminReducer from "./adminReducer";
import fragmentReducer from "./fragmentReducer";
import createFragmentReducer from "./createFragmentReducer";
import catalogFragmentsReducer from "./catalogFragmentsReducer";
import createTestReducer from "./createTestReducer";
import createLessonReducer from "./createLessonReducer";
import allTagsReducer from "./allTagsReducer";
import teacherProfileReducer from "./teacherProfileReducer";
import teachersReducer from "./teachersReducer";
import lessonsCatalogReducer from "./lessonsCatalogReducer";
import lessonReducer from "./lessonReducer";
import catalogPagesReducer from "./catalogPagesReducer";
import pairsReducer from "./games/pairsReducer";


const reducers = combineReducers({
	auth: authReducer,
	profile: profileReducer,
	admin: adminReducer,
	createFragment: createFragmentReducer,
	catalogFragments: catalogFragmentsReducer,
	fragment: fragmentReducer,
	createTest: createTestReducer,
	createLesson: createLessonReducer,
	allTags: allTagsReducer,
	teacherProfile: teacherProfileReducer,
	teachers: teachersReducer,
	lessonsCatalog: lessonsCatalogReducer,
	lesson: lessonReducer,
	catalogPages: catalogPagesReducer,
	pairs: pairsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;