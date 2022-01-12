import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Lesson from "./Lesson";
import {withRouter} from "react-router-dom";
import {
	addTag,
	changeLessonAnnotation,
	changeLessonTitle, clearAllFields, deleteFragment,
	deleteLesson, deleteTag,
	getLesson, setCurrentFragment, setFon, setFragments, toggleCurrentFragmentFavorite,
	toggleFavorite, updateLesson
} from "../../redux/lessonReducer";
import {returnTag} from "../../redux/allTagsReducer";
import {changeFavorite} from "../../redux/fragmentReducer";


class LessonContainer extends React.Component {
	state = {
		id: this.props.match.params.id,
		isEdit: false
	}

	componentDidMount() {
		this.props.getLesson(this.state.id);
	}

	componentWillUnmount() {
		this.props.clearAllFields();
	}

	toggleIsEdit = () => {
		this.setState({isEdit: !this.state.isEdit});
	}

	deleteLesson = () => {
		return this.props.deleteLesson(this.state.id)
			.then(() => this.props.history.goBack());
	}

	updateLesson = () => {
		const fragmentsIds = this.props.fragments.map(fragment => fragment.id);
		const tagsIds = this.props.tags?.map(tag => tag.id);
		return this.props.updateLesson(
			this.state.id,
			this.props.lessonTitle,
			this.props.lessonAnnotation,
			fragmentsIds,
			tagsIds,
			this.props.fon
		);
	}

	render() {
		return (
			<Lesson
				{...this.state}
				{...this.props}
				toggleIsEdit={this.toggleIsEdit}
				deleteLesson={this.deleteLesson}
				updateLesson={this.updateLesson}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	role: state.auth.role,
	userId: state.auth.userId,
	fragments: state.lesson.fragments,
	currentFragment: state.lesson.currentFragment,
	lessonTitle: state.lesson.lessonTitle,
	lessonAnnotation: state.lesson.lessonAnnotation,
	favorite: state.lesson.favorite,
	favoriteFetching: state.lesson.favoriteFetching,
	isFetching: state.lesson.isFetching,
	creatorId: state.lesson.creatorId,
	creatorName: state.lesson.creatorName,
	creatorAvatar: state.lesson.creatorAvatar,
	tags: state.lesson.tags,
	fon: state.lesson.fon,
	prevFragmentOrder: state.lesson.prevFragmentOrder,
	nextFragmentOrder: state.lesson.nextFragmentOrder,
	currentFragmentId: state.lesson.currentFragmentId,
	prevId: state.lesson.prevId,
	nextId: state.lesson.nextId,
});

export default compose(
	connect(mapStateToProps, {
		getLesson,
		deleteLesson,
		toggleFavorite,
		changeLessonTitle,
		changeLessonAnnotation,
		setCurrentFragment,
		setFragments,
		returnTag,
		addTag,
		deleteTag,
		updateLesson,
		changeFavorite,
		toggleCurrentFragmentFavorite,
		clearAllFields,
		deleteFragment,
		setFon
	}),
	withRouter
)(LessonContainer)