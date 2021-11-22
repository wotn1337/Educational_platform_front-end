import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getLessons, changePage} from "../../../../redux/lessonsCatalogReducer";
import LessonsList from "./LessonsList";


class LessonsListContainer extends React.Component {
	componentDidMount() {
		this.props.getLessons(1);
	}

	changePage = (page) => {
		this.props.changePage(page);
	}

	render() {
		return (
			<LessonsList {...this.props} changePage={this.changePage}/>
		);
	}
}

const mapStateToProps = (state) => ({
	lessons: state.lessonsCatalog.lessons,
	currentPage: state.lessonsCatalog.currentPage,
	nextPage: state.lessonsCatalog.nextPage,
	prevPage: state.lessonsCatalog.prevPage,
	lastPage: state.lessonsCatalog.lastPage,
	lessonsCount: state.lessonsCatalog.lessonsCount,
	isFetching: state.lessonsCatalog.isFetching
});

export default compose(
	connect(mapStateToProps, {getLessons, changePage}),
)(LessonsListContainer)