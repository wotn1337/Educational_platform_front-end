import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import AuthPageContainer from "./components/AuthPage/AuthPageContainer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";

class App extends React.Component {
    state = {
        backgroundImage: null
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevState.backgroundImage != ) {
    //
    //     }
    // }

    changeBackground = (backgroundImage) => {
        this.setState({backgroundImage: backgroundImage})
    }

    render() {
        return (
            <div className="wrapper" style={{backgroundImage: this.state.backgroundImage}}>
                <NavbarContainer/>
                <Route
                    exact path='/'
                    render={() => <MainPage/>}
                />
                <Route
                    exact path='/auth'
                    render={() => <AuthPageContainer changeBackground={this.changeBackground.bind(this)}/>}
                />
                <Route
                    exact path='/catalog'
                    render={() => <CatalogPage/>}
                />
                <Route
                    exact path='/profile'
                    render={() => <ProfilePageContainer/>}
                />
            </div>
        )
    }
}

export default App;
