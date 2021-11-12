import React from "react";
import {addTag, createFragment, deleteTag, setContent} from "../../redux/createFragmentReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Preloader from "../Preloader/Preloader";
import CreateFragment from "./CreateFragment";
import {returnTag} from "../../redux/allTagsReducer";


class CreateFragmentContainer extends React.Component {
	createFragment = () => {
		this.props.createFragment(
			this.props.token,
			this.props.fragmentType,
			this.props.title,
			this.props.content,
			this.props.tagsIds
		);
	}
	render() {
		if (this.props.isFetching) {
			return <Preloader size={400}/>;
		}

		return <CreateFragment {...this.props} createFragment={this.createFragment}/>;
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	fragmentType: state.createFragment.fragmentType,
	title: state.createFragment.title,
	content: state.createFragment.content,
	isFetching: state.createFragment.isFetching,
	tags: state.createFragment.tags,
	tagsIds: state.createFragment.tagsIds
});

export default compose(
	withoutAuthRedirectToAuthPage,
	connect(mapStateToProps, {
		setContent,
		createFragment,
		deleteTag,
		addTag,
		returnTag
	})
)(CreateFragmentContainer);