import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from "redux";
import navbarReducer from "./navbarReducer";
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


const reducers = combineReducers({
	navbar: navbarReducer,
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
	favorites: favoritesReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;