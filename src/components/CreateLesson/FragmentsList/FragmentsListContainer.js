import React from "react";
import {connect} from "react-redux";
import FragmentsList from "./FragmentsList";
import {changePage, getMyFragments} from "../../../redux/myFragmentsReducer";
import Preloader from "../../../common/Preloader/Preloader";

class FragmentsListContainer extends React.Component {
	state = {
		fragments: this.props.fragments
	}

	isFragmentChosen = (id) => {
		return this.state.fragments.some(elem => elem.id === id);
	}

	getFragmentNumber = (id) => {
		let index = this.state.fragments.findIndex(elem => elem.id === id);
		return this.state.fragments[index].order;
	}

	addFragment = (fragment) => {
		if (!this.state.fragments.some(f => f.id === fragment.id)) {
			this.setState({
				fragments: [
					...this.state.fragments,
					{
						...fragment,
						order: this.state.fragments.length + 1
					}
				]
			})
		}
	}

	deleteFragment = (fragmentId) => {
		const deleteNumber = this.getFragmentNumber(fragmentId)
		let newState = this.state.fragments;
		if (this.state.fragments.length !== deleteNumber) {
			newState = this.state.fragments.map(f => {
				return (f.order > deleteNumber ? {...f, order: f.order - 1} : f)
			});
		}
		this.setState({
			fragments: newState.filter(f => f.id !== fragmentId)
		})
	}

	setFragments = () => {
		this.props.setFragments(this.state.fragments);
	}

	componentDidMount() {
		this.props.getMyFragments(this.props.currentPage);
	};

	changePage = (page) => {
		this.props.changePage(
			page,
			this.props.searchTitle,
			this.props.searchType
		);
	};

	render() {
		if (this.props.isFetching) {
			return <Preloader size={200}/>;
		}
		return <FragmentsList {...this.props}
		                      setModalActive={this.props.setModalActive}
		                      changePage={this.changePage}
		                      addFragment={this.addFragment}
		                      deleteFragment={this.deleteFragment}
		                      isFragmentChosen={this.isFragmentChosen}
		                      setFragments={this.setFragments}
		                      getFragmentNumber={this.getFragmentNumber}
		/>
	}
}

const mapStateToProps = (state) => ({
	myFragments: state.myFragments.fragments,
	currentPage: state.myFragments.currentPage,
	nextPage: state.myFragments.nextPage,
	prevPage: state.myFragments.prevPage,
	lastPage: state.myFragments.lastPage,
	pageSize: state.myFragments.pageSize,
	isFetching: state.myFragments.isFetching,
	searchTitle: state.myFragments.searchTitle,
	searchType: state.myFragments.searchType,
	title: state.createLesson.title
});

export default connect(mapStateToProps, {
	getMyFragments,
	changePage
})(FragmentsListContainer);