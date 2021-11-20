import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import TagsList from "./TagsList";
import {addTag, getTags, returnTag, setTagsIds} from "../../../redux/allTagsReducer";


class TagsListContainer extends React.Component {
	componentDidMount() {
		this.props.setTagsIds(this.props.currentTags);
		this.props.getTags();
	}

	render() {
		return (
			<TagsList {...this.props}/>
		);
	}
}

const mapStateToProps = (state) => ({
	allTags: state.allTags.allTags,
	isFetching: state.allTags.isFetching,
	currentTagsIds: state.allTags.currentTagsIds
});

export default compose(
	connect(mapStateToProps, {
		getTags,
		setTagsIds,
		addTag,
		returnTag
	}),
)(TagsListContainer)