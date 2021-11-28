import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Lesson from "./Lesson";
import {Redirect, withRouter} from "react-router-dom";
import {
	changeLessonAnnotation,
	changeLessonTitle,
	deleteLesson,
	getLesson, setCurrentFragment,
	toggleFavorite
} from "../../redux/lessonReducer";


class LessonContainer extends React.Component {
	state = {
		id: this.props.match.params.id,
		isEdit: false
	}

	componentDidMount() {
		this.props.getLesson(this.state.id);
		this.props.history.push(`/lesson/${this.state.id}`);
	}

	toggleIsEdit = () => {
		this.setState({isEdit: !this.state.isEdit});
	}

	deleteLesson = () => {
		this.props.deleteLesson(this.state.id)
			.then(() => this.setState({id: ''}));
	}

	render() {
		if (!this.state.id) {
			return <Redirect to={'/lessons-catalog'}/>
		}
		return (
			<Lesson
				{...this.state}
				{...this.props}
				toggleIsEdit={this.toggleIsEdit}
				deleteLesson={this.deleteLesson}
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
});

export default compose(
	connect(mapStateToProps, {
		getLesson,
		deleteLesson,
		toggleFavorite,
		changeLessonTitle,
		changeLessonAnnotation,
		setCurrentFragment
	}),
	withRouter
)(LessonContainer)