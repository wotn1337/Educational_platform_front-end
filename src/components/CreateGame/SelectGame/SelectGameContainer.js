import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getGames, setCurrentGame} from "../../../redux/gamesReducer";
import {setContent, setGameType, setTask} from "../../../redux/createFragmentReducer";
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
    task: state.createFragment.task,
    gameType: state.createFragment.gameType,
    isEdit: state.createFragment.isEdit
})

export default compose(connect(mapStateToProps, {
    setContent,
    setCurrentGame,
    setGameType,
    setTask,
    getGames})
)(SelectGameContainer)