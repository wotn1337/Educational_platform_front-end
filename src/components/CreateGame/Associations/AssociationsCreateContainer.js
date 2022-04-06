import React from "react";
import {connect} from "react-redux";
import AssociationsCreate from "./AssociationsCreate";
import {addAssociation, deleteAssociation, setAssociation} from "../../../redux/gamesReducer";
import {setContent} from "../../../redux/createFragmentReducer";

class AssociationsCreateContainer extends React.Component {
    render() {
        return (
            <AssociationsCreate
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    pairs: state.games.associations
});

export default connect(mapStateToProps, {
    addAssociation,
    setAssociation,
    deleteAssociation,
    setContent
})
(AssociationsCreateContainer);