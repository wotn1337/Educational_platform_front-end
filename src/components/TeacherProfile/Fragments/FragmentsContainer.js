import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getTeacherFragments} from "../../../redux/teacherProfileReducer";
import FragmentsList from "../../MyFragments/FragmentsList/FragmentsList";
import Preloader from "../../../common/Preloader/Preloader";


class FragmentsContainer extends React.Component {
	componentDidMount() {
		this.props.getTeacherFragments(this.props.token, this.props.id, 1);
	}

	changePage = (page) => {
		this.props.getTeacherFragments(this.props.token, this.props.id, page);
	}

	render() {
		if (this.props.fragmentsFetching) {
			return <Preloader size={200}/>
		}
		
		return (
			<FragmentsList
				{...this.props}
				changePage={this.changePage}
				// isFavorite={this.isFavorite}
				// changeFavorite={this.changeFavorite}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
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

export default compose(
	connect(mapStateToProps, {getTeacherFragments}),
)(FragmentsContainer)