import React from "react";
import {connect} from "react-redux";
import {setCurrentGame} from "../../../redux/gamesReducer";
import {setContent, setGameType} from "../../../redux/createFragmentReducer";
import SelectGame from "./SelectGame";

class SelectGameContainer extends React.Component {
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

export default connect(mapStateToProps, {setContent, setCurrentGame, setGameType})(SelectGameContainer)