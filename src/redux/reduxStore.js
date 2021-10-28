import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from "redux";
import navbarReducer from "./navbarReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import adminReducer from "./adminReducer";
import createArticleReducer from "./createArticleReducer";
import myFragmentsReducer from "./myFragmentsReducer";
import fragmentReducer from "./fragmentReducer";
import createTestReducer from "./createTestReducer";


const reducers = combineReducers({
	navbar: navbarReducer,
	auth: authReducer,
	profile: profileReducer,
	admin: adminReducer,
	createFragment: createArticleReducer,
	myFragments: myFragmentsReducer,
	fragment: fragmentReducer,
	createTest: createTestReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;