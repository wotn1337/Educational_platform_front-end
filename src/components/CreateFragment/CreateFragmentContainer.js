import React from "react";
import {addTag, clearAllFields, createFragment, deleteTag, setContent, setFon} from "../../redux/createFragmentReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Preloader from "../../common/Preloader/Preloader";
import CreateFragment from "./CreateFragment";
import {returnTag} from "../../redux/allTagsReducer";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";
import {redirectStudentToMain} from "../../hoc/redirectStudentToMain";


class CreateFragmentContainer extends React.Component {
	componentWillUnmount() {
		this.props.clearAllFields();
	}

	createFragment = () => {
		this.props.createFragment(
			this.props.fragmentType,
			this.props.title,
			this.props.content,
			this.props.tagsIds,
			this.props.fon,
			this.props.annotation
		);
	}
	render() {
		if (this.props.isFetching) {
			return <Preloader size={200}/>;
		}

		return <CreateFragment {...this.props} createFragment={this.createFragment}/>;
	}
}

const mapStateToProps = (state) => ({
	fragmentType: state.createFragment.fragmentType,
	title: state.createFragment.title,
	content: state.createFragment.content,
	isFetching: state.createFragment.isFetching,
	tags: state.createFragment.tags,
	tagsIds: state.createFragment.tagsIds,
	fon: state.createFragment.fon,
	annotation: state.createFragment.annotation
});

export default compose(
	withoutAuthRedirectToAuthPage,
	redirectAdminToMain,
	redirectStudentToMain,
	connect(mapStateToProps, {
		setContent,
		createFragment,
		deleteTag,
		addTag,
		returnTag,
		setFon,
		clearAllFields
	})
)(CreateFragmentContainer);