import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getLessons} from "../../../../redux/lessonsCatalogReducer";
import LessonsList from "./LessonsList";
import Preloader from "../../../../common/Preloader/Preloader";
import {toggleFavorite} from "../../../../redux/lessonReducer";


class LessonsListContainer extends React.Component {
	componentDidMount() {
		const tagsIds = this.props.searchTags.map(tag => tag.id);
		this.props.getLessons(
			this.props.page,
			1,
			this.props.searchLessonTitle,
			this.props.searchTeacherName,
			tagsIds
		);
	}

	changePage = (page) => {
		const tagsIds = this.props.searchTags.map(tag => tag.id);
		this.props.getLessons(
			this.props.page,
			page,
			this.props.searchLessonTitle,
			this.props.searchTeacherName,
			tagsIds
		);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader size={200}/>
		}

		return (
			<LessonsList {...this.props} changePage={this.changePage}/>
		);
	}
}

const mapStateToProps = (state) => ({
	role: state.auth.role,
	lessons: state.lessonsCatalog.lessons,
	currentPage: state.lessonsCatalog.currentPage,
	nextPage: state.lessonsCatalog.nextPage,
	prevPage: state.lessonsCatalog.prevPage,
	lastPage: state.lessonsCatalog.lastPage,
	lessonsCount: state.lessonsCatalog.lessonsCount,
	isFetching: state.lessonsCatalog.isFetching,
	searchLessonTitle: state.lessonsCatalog.searchLessonTitle,
	searchTeacherName: state.lessonsCatalog.searchTeacherName,
	searchTags: state.lessonsCatalog.searchTags,
});

export default compose(
	connect(mapStateToProps, {getLessons, toggleFavorite}),
)(LessonsListContainer)