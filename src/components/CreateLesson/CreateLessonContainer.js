import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {
	setFragments,
	addTag,
	changeAnnotation,
	changeLessonTitle,
	createLesson,
	deleteTag, setFon, clearAllFields, deleteFragment, setAgeLimit
} from "../../redux/createLessonReducer";
import {compose} from "redux";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import {returnTag} from "../../redux/allTagsReducer";
import {getFragments} from "../../redux/catalogFragmentsReducer";


class CreateLessonContainer extends React.Component {
	componentWillUnmount() {
		this.props.clearAllFields();
	}

	createLesson = () => {
		const fragmentsIds = this.props.lessonFragments.map(fragment => fragment.id);
		const tagsIds = this.props.tags.map(tag => tag.id);
		this.props.createLesson(
			this.props.title,
			this.props.annotation,
			fragmentsIds,
			tagsIds,
			this.props.fon,
			this.props.ageLimitId
		);
	}

	render() {
		return <CreateLesson {...this.props} createLesson={this.createLesson}/>;
	}
}

const mapStateToProps = (state) => ({
	title: state.createLesson.title,
	lessonFragments: state.createLesson.fragments,
	isFetching: state.createLesson.isFetching,
	tags: state.createLesson.tags,
	annotation: state.createLesson.annotation,
	fon: state.createLesson.fon,
	titleError: state.createLesson.titleError,
	annotationError: state.createLesson.annotationError,
	fragmentsError: state.createLesson.fragmentsError,
	ageLimitId: state.createLesson.ageLimitId
});

export default compose(
	withoutAuthRedirectToAuthPage,
	redirectAdminToMain,
	connect(mapStateToProps, {
		changeLessonTitle,
		setFragments,
		getFragments,
		createLesson,
		addTag,
		deleteTag,
		returnTag,
		changeAnnotation,
		setFon,
		clearAllFields,
		deleteFragment,
		setAgeLimit
	})
)(CreateLessonContainer);