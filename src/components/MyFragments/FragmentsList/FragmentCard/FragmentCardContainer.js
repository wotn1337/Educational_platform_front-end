import React from "react";
import {connect} from "react-redux";
import {changeFavorite} from "../../../../redux/favoritesReducer";
import FragmentCard from "./FragmentCard";

class FragmentCardContainer extends React.Component {
    state = {
        isFavorite: this.props.isFavorite
    }

    changeFavorite = (id) => {
        this.props.changeFavorite(id);
        this.setState({
            isFavorite: !this.state.isFavorite
        })
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
    fragments: state.myFragments.fragments,
    currentPage: state.myFragments.currentPage,
    nextPage: state.myFragments.nextPage,
    prevPage: state.myFragments.prevPage,
    lastPage: state.myFragments.lastPage,
    pageSize: state.myFragments.pageSize,
    isFetching: state.myFragments.isFetching,
    searchTitle: state.myFragments.searchTitle,
    searchType: state.myFragments.searchType
});

export default connect(mapStateToProps, {changeFavorite})(FragmentCardContainer);