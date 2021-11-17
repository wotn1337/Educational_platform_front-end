import React from "react";
import {connect} from "react-redux";
import {changePage, getMyFragments} from "../../../../redux/myFragmentsReducer";
import {changeFavorite} from "../../../../redux/favoritesReducer";
import FragmentCard from "./FragmentCard";

class FragmentCardContainer extends React.Component {

    changeFavorite = (id) => {
        this.props.changeFavorite(this.props.token, id);
    }

    render() {
        return (
            <FragmentCard
                id={this.props.id}
                key={this.props.id}
                fragmentType={this.props.fragmentType}
                title={this.props.title}
                tags={this.props.tags}
                isFavorite={this.props.isFavorite}
                changeFavorite={this.changeFavorite}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
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

export default connect(mapStateToProps, {
    getMyFragments,
    changePage,
    changeFavorite})(FragmentCardContainer);