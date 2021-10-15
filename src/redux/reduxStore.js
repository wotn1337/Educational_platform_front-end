import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from "redux";
import mainPageReducer from "./mainPageReducer";
import authPageReducer from "./authPageReducer";
import navbarReducer from "./navbarReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import adminReducer from "./adminReducer";


const reducers = combineReducers({
	mainPage: mainPageReducer,
	authPage: authPageReducer,
	navbar: navbarReducer,
	auth: authReducer,
	profile: profileReducer,
	admin: adminReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;