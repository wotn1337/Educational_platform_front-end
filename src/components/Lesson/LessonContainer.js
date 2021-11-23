import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Lesson from "./Lesson";
import {Redirect, withRouter} from "react-router-dom";
import {deleteLesson, getLesson, toggleFavorite} from "../../redux/lessonReducer";


class LessonContainer extends React.Component {
	state = {
		id: this.props.match.params.id
	}

	componentDidMount() {
		this.props.getLesson(this.state.id, 1);
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
			<Lesson {...this.state} {...this.props} changeFragment={this.changeFragment}/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentFragment: state.lesson.currentFragment,
	fragmentsTitles: state.lesson.fragmentsTitles,
	favorite: state.lesson.favorite,
	favoriteFetching: state.lesson.favoriteFetching,
	isFetching: state.lesson.isFetching
});

export default compose(
	connect(mapStateToProps, {getLesson, deleteLesson, toggleFavorite}),
	withRouter
)(LessonContainer)