import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {addFragment, changeFragmentTitle} from "../../redux/createLessonReducer";
import {changePage, getMyFragments} from "../../redux/myFragmentsReducer";
import {compose} from "redux";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";


class CreateLessonContainer extends React.Component {
	render() {
		return <CreateLesson
			{...this.props}
		/>;
	}
}

const mapStateToProps = (state) => ({
	title: state.createLesson.title,
	lessonFragments: state.createLesson.fragments
});

export default compose(
	withoutAuthRedirectToAuthPage,
	redirectAdminToMain,
	connect(mapStateToProps, {
		changeFragmentTitle,
		addFragment,
		getMyFragments,
		changePage
	})
)(CreateLessonContainer);