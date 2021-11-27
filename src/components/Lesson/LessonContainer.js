import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Lesson from "./Lesson";
import {Redirect, withRouter} from "react-router-dom";
import {
	changeLessonAnnotation,
	changeLessonTitle,
	deleteLesson,
	getLesson,
	toggleFavorite
} from "../../redux/lessonReducer";


class LessonContainer extends React.Component {
	state = {
		id: this.props.match.params.id,
		isEdit: false
	}

	componentDidMount() {
		this.props.getLesson(this.state.id, 1);
		this.props.history.push(`/lesson/${this.state.id}`);
	}

	toggleIsEdit = () => {
		this.setState({isEdit: !this.state.isEdit});
	}

	changeFragment = (fragmentOrderNumber) => {
		this.props.getLesson(this.state.id, fragmentOrderNumber);
	}

	deleteLesson = (id) => {
		this.props.deleteLesson(id);
		this.setState({id: ''});
	}

	render() {
		if (!this.state.id) {
			return <Redirect to={'/lessons-catalog'}/>
		}
		return (
			<Lesson
				{...this.state}
				{...this.props}
				changeFragment={this.changeFragment}
				toggleIsEdit={this.toggleIsEdit}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	role: state.auth.role,
	userId: state.auth.userId,
	currentFragment: state.lesson.currentFragment,
	lessonTitle: state.lesson.lessonTitle,
	lessonAnnotation: state.lesson.lessonAnnotation,
	fragmentsTitles: state.lesson.fragmentsTitles,
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
		changeLessonAnnotation
	}),
	withRouter
)(LessonContainer)