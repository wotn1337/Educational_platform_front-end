import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AuthPageContainer from "./components/AuthPage/AuthPageContainer";

function App() {
	return (
		<div className="container-md">
			<NavbarContainer/>
			<Route
				exact path='/'
				render={() => <MainPage/>}
			/>
			<Route
				exact path='/auth'
				render={() => <AuthPageContainer/>}
			/>
		</div>
	);
}

export default App;
