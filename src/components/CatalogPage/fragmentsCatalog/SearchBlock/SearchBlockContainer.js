import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import SearchBlock from "../../../MyFragments/SearchBlock/SearchBlock";
import {
	addSearchTag,
	deleteSearchTag,
	getFragments,
	setSearchTitle,
	setSearchType
} from "../../../../redux/catalogFragmentsReducer";
import {returnTag} from "../../../../redux/allTagsReducer";


class SearchBlockContainer extends React.Component {
	searchFragments = () => {
		this.props.getFragments(
			1,
			this.props.searchTitle,
			this.props.searchType,
			this.props.searchTagsIds
		);
	}

	render() {
		return (
			<SearchBlock {...this.props} searchFragments={this.searchFragments}/>
		);
	}
}

const mapStateToProps = (state) => ({
	tags: state.allTags.tags,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType,
	searchTags: state.catalogFragments.searchTags,
	searchTagsIds: state.catalogFragments.searchTagsIds,
	totalFragmentsCount: state.catalogFragments.totalFragmentsCount
});

export default compose(
	connect(mapStateToProps, {
		getFragments,
		setSearchTitle,
		setSearchType,
		returnTag,
		deleteSearchTag,
		addSearchTag
	}),
)(SearchBlockContainer)