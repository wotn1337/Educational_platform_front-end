import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import AdminAuthPageContainer from "./admin/AdminAuthPage/AdminAuthPageContainer";
import LoginContainer from "./components/AuthPage/Login/LoginContainer";
import RegisterContainer from "./components/AuthPage/Register/RegisterContainer";
import FragmentContainer from "./components/Fragment/FragmentContainer";
import CreateFragmentContainer from "./components/CreateFragment/CreateFragmentContainer";
import CreateLessonContainer from "./components/CreateLesson/CreateLessonContainer";
import TeacherProfileContainer from "./components/TeacherProfile/TeacherProfileContainer";
import Favorite from "./components/Favorite/Favorite";
import LessonContainer from "./components/Lesson/LessonContainer";
import Catalog from "./components/CatalogPage/Catalog";
import MyMaterials from "./components/MyMaterials/MyMaterials";
import Preloader from "./common/Preloader/Preloader";
import Puzzle from "./components/Games/Puzzle/Puzzle";
import CreateGraphDictationContainer from "./components/CreateGame/GraphicDictation/CreateGraphDictationContainer";

const BlockedPage = React.lazy(() => import("./components/BlockedPage/BlockedPage"));
const ResetPasswordContainer = React.lazy(() => import("./components/AuthPage/Login/ResetPassword/ResetPasswordContainer"));
const TeachersContainer = React.lazy(() => import("./components/Teachers/TeachersContainer"));


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
				exact path='/catalog'
				render={() => <Catalog />}
			/>
			<Route
				exact path='/teachers'
				render={() => (
					<React.Suspense fallback={<Preloader size={200}/>}>
						<TeachersContainer/>
					</React.Suspense>
				)}
			/>
			<Route
				exact path='/my-materials'
				render={() => <MyMaterials/>}
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
				exact path='/me'
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
				render={() => (
					<React.Suspense fallback={<Preloader size={200}/>}>
						<ResetPasswordContainer/>
					</React.Suspense>
				)}
			/>
			<Route
				exact path='/fragment/:id?'
				render={() => <FragmentContainer/>}
			/>
			<Route
				path='/lesson/:id?'
				render={() => <LessonContainer/>}
			/>
			<Route
				path='/blocked'
				render={() => (
					<React.Suspense fallback={<Preloader size={200}/>}>
						<BlockedPage/>
					</React.Suspense>
				)}
			/>
			<Route
				path='/puzzle'
				render={() => <Puzzle rows={3} cols={4}/>}
			/>
			<Route
				path='/graph'
				render={() => <CreateGraphDictationContainer/>}
			/>
		</>
	)
}

export default App;
