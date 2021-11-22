import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Lesson from "./Lesson";
import {withRouter} from "react-router-dom";


class LessonContainer extends React.Component {
	state = {
		id: this.props.match.params.id
	}
	render() {
		return (
			<Lesson {...this.state}/>
		);
	}
}

const mapStateToProps = (state) => ({});

export default compose(
	connect(mapStateToProps),
	withRouter
)(LessonContainer)