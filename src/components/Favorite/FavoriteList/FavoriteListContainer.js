import React from "react";
import {connect} from "react-redux";
import FragmentsList from "../../MyFragments/FragmentsList/FragmentsList";
import {changePage, getFavorites} from "../../../redux/favoritesReducer";
import Preloader from "../../Preloader/Preloader";

class FavoriteListContainer extends React.Component {

    componentDidMount() {
        this.props.getFavorites(
            this.props.token,
            this.props.currentPage
        );
    }

    changePage = (page) => {
        this.props.changePage(
            this.props.token,
            page,
            this.props.searchTitle,
            this.props.searchType
        );
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader size={400}/>;
        }
        return (
            <FragmentsList
                fragments={this.props.fragments}
                currentPage={this.props.currentPage}
                nextPage={this.props.nextPage}
                prevPage={this.props.prevPage}
                lastPage={this.props.lastPage}
                pageSize={this.props.pageSize}
                changePage={this.changePage}/>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    fragments: state.favorites.favorites,
    currentPage: state.favorites.currentPage,
    nextPage: state.favorites.nextPage,
    prevPage: state.favorites.prevPage,
    lastPage: state.favorites.lastPage,
    pageSize: state.favorites.pageSize,
    isFetching: state.favorites.isFetching
});

export default connect(mapStateToProps, {getFavorites, changePage})(FavoriteListContainer);