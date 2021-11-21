import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {addFragment, changeFragmentTitle, createLesson} from "../../redux/createLessonReducer";
import {changePage, getMyFragments} from "../../redux/myFragmentsReducer";
import {compose} from "redux";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";


class CreateLessonContainer extends React.Component {
	createLesson = () => {
		const fragmentsIds = this.props.lessonFragments.map(fragment => fragment.id);
		this.props.createLesson(this.props.title, 'test annotation', fragmentsIds, null);
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
	isFetching: state.createLesson.isFetching
});

export default compose(
	withoutAuthRedirectToAuthPage,
	redirectAdminToMain,
	connect(mapStateToProps, {
		changeFragmentTitle,
		addFragment,
		getMyFragments,
		changePage,
		createLesson
	})
)(CreateLessonContainer);