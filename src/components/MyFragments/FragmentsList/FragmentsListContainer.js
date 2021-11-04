import React from "react";
import FragmentsList from "./FragmentsList";
import {connect} from "react-redux";
import {changePage, getMyFragments} from "../../../redux/myFragmentsReducer";
import Preloader from "../../Preloader/Preloader";


class FragmentsListContainer extends React.Component {
	componentDidMount() {
		this.props.getMyFragments(
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

		return <FragmentsList
			fragments={this.props.fragments}
			currentPage={this.props.currentPage}
			nextPage={this.props.nextPage}
			prevPage={this.props.prevPage}
			lastPage={this.props.lastPage}
			pageSize={this.props.pageSize}
			changePage={this.changePage}
		/>;
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

export default connect(mapStateToProps, {getMyFragments, changePage})(FragmentsListContainer);