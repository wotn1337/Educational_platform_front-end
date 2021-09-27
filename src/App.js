import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AuthPage from "./components/AuthPage/AuthPage";

function App() {
	return (
		<div className="container-md">
			<Navbar/>
			<Route
				exact path='/'
				render={() => <MainPage/>}
			/>
			<Route
				path='/auth'
				render={() => <AuthPage/>}
			/>
		</div>
	);
}

export default App;
