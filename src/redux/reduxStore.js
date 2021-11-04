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


const reducers = combineReducers({
	navbar: navbarReducer,
	auth: authReducer,
	profile: profileReducer,
	admin: adminReducer,
	createFragment: createFragmentReducer,
	myFragments: myFragmentsReducer,
	catalogFragments: catalogFragmentsReducer,
	fragment: fragmentReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;