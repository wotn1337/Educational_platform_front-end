import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import TagsList from "./TagsList";
import {getTags} from "../../../redux/createFragmentReducer";


class TagsListContainer extends React.Component {
	componentDidMount() {
		if (this.props.allTags.length === 0 && this.props.tags.length === 0)
			this.props.getTags(this.props.token);
	}

	render() {
		return (
			<TagsList {...this.props}/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	allTags: state.createFragment.allTags,
	tags: state.createFragment.tags,
	tagsFetching: state.createFragment.tagsFetching
});

export default compose(
	connect(mapStateToProps, {getTags}),
)(TagsListContainer)