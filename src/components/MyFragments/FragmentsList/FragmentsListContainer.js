import React from "react";
import FragmentsList from "./FragmentsList";
import {connect} from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import {getFragments} from "../../../redux/catalogFragmentsReducer";


class FragmentsListContainer extends React.Component {
	componentDidMount() {
		this.props.getFragments(
			this.props.page,
			1
		);
	}

	changePage = (page) => {
		const tags = this.props.searchTags.map(tag => tag.id);
		this.props.getFragments(
			this.props.page,
			page,
			this.props.searchTitle,
			this.props.searchType,
			tags
		);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader size={200}/>;
		}

		return <FragmentsList {...this.props} changePage={this.changePage}/>;
	}
}

const mapStateToProps = (state) => ({
	fragments: state.catalogFragments.fragments,
	currentPage: state.catalogFragments.currentPage,
	nextPage: state.catalogFragments.nextPage,
	prevPage: state.catalogFragments.prevPage,
	lastPage: state.catalogFragments.lastPage,
	pageSize: state.catalogFragments.pageSize,
	isFetching: state.catalogFragments.isFetching,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType,
	searchTags: state.catalogFragments.searchTags
});

export default connect(mapStateToProps, {getFragments})(FragmentsListContainer);