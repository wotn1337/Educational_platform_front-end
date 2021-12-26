import React from "react";
import {connect} from "react-redux";
import FragmentCard from "./FragmentCard";
import {changeFavorite} from "../../../../redux/catalogFragmentsReducer";
import {deleteFragment} from "../../../../redux/createLessonReducer";

class FragmentCardContainer extends React.Component {
    state = {
        isFavorite: this.props.isFavorite
    }

    changeFavorite = (id) => {
        this.props.changeFavorite(id)
            .then(() => this.setState({isFavorite: !this.state.isFavorite}));
    }

    render() {
        return (
            <FragmentCard
                {...this.props}
                isFavorite={this.state.isFavorite}
                changeFavorite={this.changeFavorite}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, {changeFavorite, deleteFragment})(FragmentCardContainer);