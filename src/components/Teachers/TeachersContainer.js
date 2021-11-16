import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Teachers from "./Teachers";
import {getTeachers, changePage} from "../../redux/teachersReducer";


class TeachersContainer extends React.Component {
	componentDidMount() {
		this.props.getTeachers(this.props.token, 1);
	}

	changePage = (page) => {
		this.props.getTeachers(this.props.token, page);
	}

	render() {
		return (
			<Teachers {...this.props} changePage={this.changePage}/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	teachers: state.teachers.teachers,
	currentPage: state.teachers.currentPage,
	pageSize: state.teachers.pageSize,
	totalTeachers: state.teachers.totalTeachers,
	prevPage: state.teachers.prevPage,
	nextPage: state.teachers.nextPage,
	lastPage: state.teachers.lastPage,
	isFetching: state.teachers.isFetching
});

export default compose(
	connect(mapStateToProps, {getTeachers, changePage}),
)(TeachersContainer)