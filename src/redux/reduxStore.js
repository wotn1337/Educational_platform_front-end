import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from "redux";
import mainPageReducer from "./mainPageReducer";
import authPageReducer from "./authPageReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import navbarReducer from "./navbarReducer";
import authReducer from "./authReducer";


const reducers = combineReducers({
	mainPage: mainPageReducer,
	authPage: authPageReducer,
	login: loginReducer,
	register: registerReducer,
	navbar: navbarReducer,
	auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;