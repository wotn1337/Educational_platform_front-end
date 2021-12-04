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

	render() {
		if (this.props.isFetching) {
			return <Preloader size={200}/>;
		}

		return <FragmentsList {...this.props} changePage={this.changePage}/>;
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