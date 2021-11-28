import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import LessonSearchBlock from "./LessonSearchBlock";
import {
	addSearchTag,
	changeSearchLessonTitle,
	deleteSearchTag,
	getLessons
} from "../../../../redux/lessonsCatalogReducer";
import {returnTag} from "../../../../redux/allTagsReducer";


class LessonSearchBlockContainer extends React.Component {
	search = () => {
		const tagsIds = this.props.searchTags.map(tag => tag.id);
		this.props.getLessons(
			1,
			this.props.searchLessonTitle,
			undefined,
			tagsIds
		);
	}
	render() {
		return (
			<LessonSearchBlock {...this.props} search={this.search}/>
		);
	}
}

const mapStateToProps = (state) => ({
	searchLessonTitle: state.lessonsCatalog.searchLessonTitle,
	searchTeacherName: state.lessonsCatalog.searchTeacherName,
	searchTags: state.lessonsCatalog.searchTags,
	currentPage: state.lessonsCatalog.currentPage,
	lessonsCount: state.lessonsCatalog.lessonsCount,
	allLessonsCount: state.lessonsCatalog.allLessonsCount
});

export default compose(
	connect(mapStateToProps, {
		changeSearchLessonTitle,
		addSearchTag,
		deleteSearchTag,
		returnTag,
		getLessons
	}),
)(LessonSearchBlockContainer)