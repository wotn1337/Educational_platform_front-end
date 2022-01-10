import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Teachers from "./Teachers";
import {getTeachers, changePage, setSearchName} from "../../redux/teachersReducer";
import {withoutAuthRedirectToAuthPage} from "../hoc/withoutAuthRedirectToAuthPage";


class TeachersContainer extends React.Component {
	componentDidMount() {
		this.props.getTeachers(1, this.props.searchName);
	}

	changePage = (page) => {
		this.props.changePage(page, this.props.searchName);
	}

	search = () => {
		this.props.getTeachers(1, this.props.searchName);
	}

	render() {
		return (
			<Teachers {...this.props} changePage={this.changePage} search={this.search}/>
		);
	}
}

const mapStateToProps = (state) => ({
	teachers: state.teachers.teachers,
	currentPage: state.teachers.currentPage,
	pageSize: state.teachers.pageSize,
	totalTeachers: state.teachers.totalTeachers,
	prevPage: state.teachers.prevPage,
	nextPage: state.teachers.nextPage,
	lastPage: state.teachers.lastPage,
	isFetching: state.teachers.isFetching,
	searchName: state.teachers.searchName
});

export default compose(
	connect(mapStateToProps, {getTeachers, changePage, setSearchName}),
	withoutAuthRedirectToAuthPage
)(TeachersContainer)