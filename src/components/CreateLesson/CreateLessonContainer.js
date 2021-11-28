import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {
	addFragment,
	addTag,
	changeAnnotation,
	changeLessonTitle,
	createLesson,
	deleteTag
} from "../../redux/createLessonReducer";
import {changePage, getMyFragments} from "../../redux/myFragmentsReducer";
import {compose} from "redux";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {returnTag} from "../../redux/allTagsReducer";


class CreateLessonContainer extends React.Component {
	createLesson = () => {
		const fragmentsIds = this.props.lessonFragments.map(fragment => fragment.id);
		const tagsIds = this.props.tags.map(tag => tag.id);
		this.props.createLesson(
			this.props.title,
			this.props.annotation,
			fragmentsIds,
			tagsIds);
	}

	render() {
		return <CreateLesson
			{...this.props}
			createLesson={this.createLesson}
		/>;
	}
}

const mapStateToProps = (state) => ({
	title: state.createLesson.title,
	lessonFragments: state.createLesson.fragments,
	isFetching: state.createLesson.isFetching,
	tags: state.createLesson.tags,
	annotation: state.createLesson.annotation
});

export default compose(
	withoutAuthRedirectToAuthPage,
	redirectAdminToMain,
	connect(mapStateToProps, {
		changeLessonTitle,
		addFragment,
		getMyFragments,
		changePage,
		createLesson,
		addTag,
		deleteTag,
		returnTag,
		changeAnnotation
	})
)(CreateLessonContainer);