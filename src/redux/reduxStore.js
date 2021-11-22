import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import adminReducer from "./adminReducer";
import myFragmentsReducer from "./myFragmentsReducer";
import fragmentReducer from "./fragmentReducer";
import createFragmentReducer from "./createFragmentReducer";
import catalogFragmentsReducer from "./catalogFragmentsReducer";
import createTestReducer from "./createTestReducer";
import createLessonReducer from "./createLessonReducer";
import allTagsReducer from "./allTagsReducer";
import teacherProfileReducer from "./teacherProfileReducer";
import favoritesReducer from "./favoritesReducer";
import teachersReducer from "./teachersReducer";
import lessonsCatalogReducer from "./lessonsCatalogReducer";


const reducers = combineReducers({
	auth: authReducer,
	profile: profileReducer,
	admin: adminReducer,
	createFragment: createFragmentReducer,
	myFragments: myFragmentsReducer,
	catalogFragments: catalogFragmentsReducer,
	fragment: fragmentReducer,
	createTest: createTestReducer,
	createLesson: createLessonReducer,
	allTags: allTagsReducer,
	teacherProfile: teacherProfileReducer,
	favorites: favoritesReducer,
	teachers: teachersReducer,
	lessonsCatalog: lessonsCatalogReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;