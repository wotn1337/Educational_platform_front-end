import React from "react";
import {connect} from "react-redux";
import CreateLesson from "./CreateLesson";
import {addFragment, changeFragmentTitle} from "../../redux/createLessonReducer";
import {changePage, getMyFragments} from "../../redux/myFragmentsReducer";
import {compose} from "redux";
import {withAuthRedirectToMain} from "../../hoc/withAuthRedirectToMain";
import {redirectAdminToMain} from "../../hoc/redirectAdminToMain";


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
	withAuthRedirectToMain,
	redirectAdminToMain,
	connect(mapStateToProps, {
		changeFragmentTitle,
		addFragment,
		getMyFragments,
		changePage
	})
)(CreateLessonContainer);