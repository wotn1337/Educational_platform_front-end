import React from "react";
import {connect} from "react-redux";
import PuzzlesCreate from "./PuzzlesCreate";
import {clearAllFields, setCols, setPuzzlesImage, setRows} from "../../../redux/gamesReducer";

class PuzzlesCreateContainer extends React.Component {
    componentWillUnmount() {
        this.props.clearAllFields();
    }

    render() {
        return (
            <PuzzlesCreate puzzleImage={this.props.puzzles.image}
                           cols={this.props.puzzles.cols}
                           rows={this.props.puzzles.rows}
                           setCols={this.props.setCols}
                           setRows={this.props.setRows}
                           setPuzzlesImage={this.props.setPuzzlesImage}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    puzzles: state.games.puzzles
});

export default connect(mapStateToProps, {
    setPuzzlesImage,
    setCols,
    setRows,
    clearAllFields
})
(PuzzlesCreateContainer);