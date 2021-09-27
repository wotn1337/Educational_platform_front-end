import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import authPageReducer from "./authPageReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";


const reducers = combineReducers({
	mainPage: mainPageReducer,
	authPage: authPageReducer,
	login: loginReducer,
	register: registerReducer
});

const store = createStore(reducers);

export default store;