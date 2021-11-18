import React from "react";
import FragmentsList from "./FragmentsList";
import {connect} from "react-redux";
import {changePage, getMyFragments} from "../../../redux/myFragmentsReducer";
import Preloader from "../../../common/Preloader/Preloader";


class FragmentsListContainer extends React.Component {
	componentDidMount() {
		this.props.getMyFragments(
			this.props.currentPage,
			this.props.searchTitle,
			this.props.searchType
		);
	}

	changePage = (page) => {
		this.props.changePage(
			page,
			this.props.searchTitle,
			this.props.searchType
		);
	}

	// changeFavorite = (id) => {
	// 	this.props.changeFavorite(this.props.token, id);
	// }
	//
	// isFavorite = (id) => {
	// 	return this.props.favorites.some(f => f.id===id);
	// }

	render() {
		if (this.props.isFetching) {
			return <Preloader size={400}/>;
		}

		return <FragmentsList {...this.props} changePage={this.changePage}
			// isFavorite={this.isFavorite}
			// changeFavorite={this.changeFavorite}
		/>;
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
	changePage
})(FragmentsListContainer);