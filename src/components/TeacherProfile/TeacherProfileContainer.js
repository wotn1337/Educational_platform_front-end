import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getTeacherProfile} from "../../redux/teacherProfileReducer";
import TeacherProfile from "./TeacherProfile";


class TeacherProfileContainer extends React.Component {
	state = {
		id: this.props.match.params.id.substr(1)
	}

	componentDidMount() {
		this.props.getTeacherProfile(
			this.props.token,
			this.state.id
		);
	}

	render() {
		return (
			<TeacherProfile {...this.props}/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	id: state.teacherProfile.id,
	name: state.teacherProfile.name,
	email: state.teacherProfile.email,
	avatar: state.teacherProfile.avatar,
	profileFetching: state.teacherProfile.profileFetching,
});

export default compose(
	connect(mapStateToProps, {getTeacherProfile}),
	withRouter
)(TeacherProfileContainer)