import React from "react";
import {connect} from "react-redux";
import AssociationsCreate from "./AssociationsCreate";
import {addAssociation, clearAllFields, deleteAssociation, setAssociation} from "../../../redux/gamesReducer";

class AssociationsCreateContainer extends React.Component {
    componentWillUnmount() {
        this.props.clearAllFields();
    }

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
    clearAllFields
})
(AssociationsCreateContainer);