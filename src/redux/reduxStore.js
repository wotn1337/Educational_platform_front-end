import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import authPageReducer from "./authPageReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import navbarReducer from "./navbarReducer";


const reducers = combineReducers({
	mainPage: mainPageReducer,
	authPage: authPageReducer,
	login: loginReducer,
	register: registerReducer,
	navbar: navbarReducer
});

const store = createStore(reducers);

export default store;