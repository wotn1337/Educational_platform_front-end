import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getTeacherFragments} from "../../../redux/teacherProfileReducer";
import FragmentsList from "../../MyFragments/FragmentsList/FragmentsList";
import Preloader from "../../common/Preloader/Preloader";


class FragmentsContainer extends React.Component {
	componentDidMount() {
		this.props.getTeacherFragments(this.props.id, this.props.currentPage);
	}

	changePage = (page) => {
		this.props.getTeacherFragments(this.props.id, page);
	}

	render() {
		if (this.props.fragmentsFetching) {
			return <Preloader size={200}/>
		}
		
		return (
			<FragmentsList{...this.props} changePage={this.changePage}/>
		);
	}
}

const mapStateToProps = (state) => ({
	id: state.teacherProfile.id,
	fragments: state.teacherProfile.fragmentsPage.fragments,
	currentPage: state.teacherProfile.fragmentsPage.currentPage,
	pageSize: state.teacherProfile.fragmentsPage.pageSize,
	totalFragmentsCount: state.teacherProfile.fragmentsPage.totalFragmentsCount,
	prevPage: state.teacherProfile.fragmentsPage.prevPage,
	nextPage: state.teacherProfile.fragmentsPage.nextPage,
	lastPage: state.teacherProfile.fragmentsPage.lastPage,
	fragmentsFetching: state.teacherProfile.fragmentsFetching
});

export default compose(connect(mapStateToProps, {getTeacherFragments}))(FragmentsContainer)