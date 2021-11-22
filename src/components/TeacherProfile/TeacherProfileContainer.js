import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getTeacherProfile} from "../../redux/teacherProfileReducer";
import TeacherProfile from "./TeacherProfile";


class TeacherProfileContainer extends React.Component {
	state = {
		id: this.props.match.params.id
	}

	componentDidMount() {
		this.props.getTeacherProfile(this.state.id);
	}

	render() {
		return (
			<TeacherProfile {...this.props}/>
		);
	}
}

const mapStateToProps = (state) => ({
	id: state.teacherProfile.id,
	name: state.teacherProfile.name,
	avatar: state.teacherProfile.avatar,
	profileFetching: state.teacherProfile.profileFetching
});

export default compose(
	connect(mapStateToProps, {getTeacherProfile}),
	withRouter
)(TeacherProfileContainer)