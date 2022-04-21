import React from "react";
import {connect} from "react-redux";
import SequenceCreate from "./SequenceCreate";
import {addSequence, clearAllFields, deleteSequence, setSequenceImage} from "../../../redux/gamesReducer";
import {setContent} from "../../../redux/createFragmentReducer";

class SequenceCreateContainer extends React.Component {
    componentWillUnmount() {
        this.props.clearAllFields();
    }

    render() {
        return (
            <SequenceCreate
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    sequence: state.games.sequence
});

export default connect(mapStateToProps, {
    addSequence,
    setSequenceImage,
    deleteSequence,
    clearAllFields,
    setContent
})
(SequenceCreateContainer);