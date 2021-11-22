import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import AdminAuthPageContainer from "./admin/AdminAuthPage/AdminAuthPageContainer";
import ResetPasswordContainer from "./components/AuthPage/Login/ResetPassword/ResetPasswordContainer";
import MyFragments from "./components/MyFragments/MyFragments";
import LoginContainer from "./components/AuthPage/Login/LoginContainer";
import RegisterContainer from "./components/AuthPage/Register/RegisterContainer";
import FragmentContainer from "./components/Fragment/FragmentContainer";
import CreateFragmentContainer from "./components/CreateFragment/CreateFragmentContainer";
import FragmentsCatalog from "./components/CatalogPage/fragmentsCatalog/FragmentsCatalog";
import CreateLessonContainer from "./components/CreateLesson/CreateLessonContainer";
import TeacherProfileContainer from "./components/TeacherProfile/TeacherProfileContainer";
import Favorite from "./components/Favorite/Favorite";
import TeachersContainer from "./components/Teachers/TeachersContainer";
import LessonsCatalog from "./components/CatalogPage/lessonsCatalog/LessonsCatalog";


const App = () => {
	return (
		<>
			<NavbarContainer/>
			<Route
				exact path='/'
				render={() => <MainPage/>}
			/>
			<Route
				exact path='/login'
				render={() => <LoginContainer/>}
			/>
			<Route
				exact path='/register'
				render={() => <RegisterContainer/>}
			/>
			<Route
				exact path='/catalog-fragments'
				render={() => <FragmentsCatalog/>}
			/>
			<Route
				exact path='/lessons-catalog'
				render={() => <LessonsCatalog/>}
			/>
			<Route
				exact path='/teachers'
				render={() => <TeachersContainer/>}
			/>
			<Route
				exact path='/my-fragments'
				render={() => <MyFragments/>}
			/>
			<Route
				exact path='/favorites'
				render={() => <Favorite/>}
			/>
			<Route
				exact path='/create-fragment'
				render={() => <CreateFragmentContainer/>}
			/>
			<Route
				exact path='/create-lesson'
				render={() => <CreateLessonContainer/>}
			/>
			<Route
				exact path='/profile/me'
				render={() => <ProfilePageContainer/>}
			/>
			<Route
				exact path='/profile/:id?'
				render={() => <TeacherProfileContainer/>}
			/>
			<Route
				exact path='/admin/login'
				render={() => <AdminAuthPageContainer/>}
			/>
			<Route
				exact path='/reset-password/:token?'
				render={() => <ResetPasswordContainer/>}
			/>
			<Route
				exact path='/fragment/:id?'
				render={() => <FragmentContainer/>}
			/>
		</>
	)
}

export default App;
