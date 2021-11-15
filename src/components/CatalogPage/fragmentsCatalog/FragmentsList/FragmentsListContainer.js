import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "../../../../common/Preloader/Preloader";
import FragmentsList from "../../../MyFragments/FragmentsList/FragmentsList";
import {changePage, getFragments} from "../../../../redux/catalogFragmentsReducer";



class FragmentsListContainer extends React.Component {
	componentDidMount() {
		this.props.getFragments(
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

	// changeFavorite = (id) => {
	// 	this.props.changeFavorite(this.props.token, id);
	// }

	render() {
		if (this.props.isFetching) {
			return <Preloader size={400}/>;
		}

		return <FragmentsList
			fragments={this.props.fragments}
			currentPage={this.props.currentPage}
			nextPage={this.props.nextPage}
			prevPage={this.props.prevPage}
			lastPage={this.props.lastPage}
			pageSize={this.props.pageSize}
			changePage={this.changePage}
			// changeFavorite={this.changeFavorite}
		/>;
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	fragments: state.catalogFragments.fragments,
	currentPage: state.catalogFragments.currentPage,
	nextPage: state.catalogFragments.nextPage,
	prevPage: state.catalogFragments.prevPage,
	lastPage: state.catalogFragments.lastPage,
	pageSize: state.catalogFragments.pageSize,
	isFetching: state.catalogFragments.isFetching,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType
});

export default compose(
	connect(mapStateToProps, {getFragments, changePage}),
)(FragmentsListContainer)