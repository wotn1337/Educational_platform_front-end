import React from "react";
import {connect} from "react-redux";
import {changePage, getMyFragments} from "../../../../redux/myFragmentsReducer";
import {changeFavorite} from "../../../../redux/favoritesReducer";
import FragmentCard from "./FragmentCard";
import {getFragments} from "../../../../redux/catalogFragmentsReducer";

class FragmentCardContainer extends React.Component {

    changeFavorite = (id) => {
        this.props.changeFavorite(this.props.token, id);
        this.props.getMyFragments(this.props.token, this.props.currentPage, this.props.searchTitle,
            this.props.searchType);
        this.props.getFragments(this.props.token, this.props.currentPage, this.props.searchTitle,
            this.props.searchType);
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
    getFragments,
    changePage,
    changeFavorite})(FragmentCardContainer);