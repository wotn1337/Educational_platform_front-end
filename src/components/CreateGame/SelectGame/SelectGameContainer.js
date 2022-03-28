import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getGames, setCurrentGame} from "../../../redux/gamesReducer";
import {setContent, setGameType} from "../../../redux/createFragmentReducer";
import SelectGame from "./SelectGame";

class SelectGameContainer extends React.Component {
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        return (
            <SelectGame {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games.games,
    gameType: state.createFragment.gameType
})

export default compose(connect(mapStateToProps, {
    setContent,
    setCurrentGame,
    setGameType,
    getGames})
)(SelectGameContainer)