import React from "react";
import {connect} from "react-redux";
import {changePage, getMyFragments} from "../../../../redux/myFragmentsReducer";
import {changeFavorite} from "../../../../redux/favoritesReducer";
import FragmentCard from "./FragmentCard";

class FragmentCardContainer extends React.Component {

    changeFavorite = (id) => {
        this.props.changeFavorite(id);
    }

    render() {
        return (
            <FragmentCard
                id={this.props.id}
                key={this.props.id}
                fragmentType={this.props.fragmentType}
                title={this.props.title}
                tags={this.props.tags}
                changeFavorite={this.changeFavorite}
            />
        )
    }
}

const mapStateToProps = (state) => ({
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