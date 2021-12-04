import React from "react";
import {connect} from "react-redux";
import FragmentCard from "./FragmentCard";
import {changeFavorite} from "../../../../redux/catalogFragmentsReducer";

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
                id={this.props.id}
                key={this.props.id}
                fragmentType={this.props.fragmentType}
                title={this.props.title}
                tags={this.props.tags}
                isFavorite={this.state.isFavorite}
                changeFavorite={this.changeFavorite}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    role: state.auth.role,
});

export default connect(mapStateToProps, {changeFavorite})(FragmentCardContainer);