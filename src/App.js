import './App.css';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AuthPageContainer from "./components/AuthPage/AuthPageContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import s from './App.css'
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
	return (
		<div className={s.wrapper}>
			<NavbarContainer/>
			<Route
				exact path='/'
				render={() => <MainPage/>}
			/>
			<Route
				exact path='/auth'
				render={() => <AuthPageContainer/>}
			/>
			<Route
				exact path='/catalog'
				render={() => <CatalogPage/>}
			/>
			<Route
				exact path='/profile'
				render={() => <ProfilePage/>}
			/>
		</div>
	);
}

export default App;
