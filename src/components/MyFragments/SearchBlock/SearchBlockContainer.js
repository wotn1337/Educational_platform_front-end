import React from "react";
import {connect} from "react-redux";
import SearchBlock from "./SearchBlock";
import {
	addSearchTag, clearSearchFields,
	deleteSearchTag,
	getFragments, setAgeLimit,
	setSearchTitle,
	setSearchType
} from "../../../redux/catalogFragmentsReducer";
import {returnTag} from "../../../redux/allTagsReducer";


class SearchBlockContainer extends React.Component {
	componentWillUnmount() {
		this.props.clearSearchFields();
	}

	state = {
		title: this.props.searchTitle,
		type: this.props.searchType,
		tags: this.props.searchTags
	}

	searchFragments = () => {
		const tags = this.props.searchTags.map(tag => tag.id);
		this.props.getFragments(
			this.props.page,
			1,
			this.props.searchTitle,
			this.props.searchType,
			tags,
			this.props.ageLimitId
		);
	}
	render() {
		return (
			<SearchBlock {...this.props} {...this.state} searchFragments={this.searchFragments}/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType,
	totalFragmentsCount: state.catalogFragments.totalFragmentsCount,
	currentFragmentsCount: state.catalogFragments.currentFragmentsCount,
	searchTags: state.catalogFragments.searchTags,
	ageLimitId: state.catalogFragments.ageLimitId
});

export default connect(mapStateToProps, {
	getFragments,
	setSearchTitle,
	setSearchType,
	addSearchTag,
	deleteSearchTag,
	returnTag,
	clearSearchFields,
	setAgeLimit
})(SearchBlockContainer);