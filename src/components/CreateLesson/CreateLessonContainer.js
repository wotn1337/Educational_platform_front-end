import React from "react";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import CreateLesson from "./CreateLesson";
import {addFragment, changeFragmentTitle} from "../../redux/createLessonReducer";


class CreateLessonContainer extends React.Component {

	render() {
		if (this.props.isFetching) {
			return <Preloader size={400}/>;
		}

		return <CreateLesson {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
    title: state.createLesson.title,
	fragments: state.createLesson.fragments
});

export default connect(mapStateToProps, {
	changeFragmentTitle,
	addFragment
})(CreateLessonContainer);