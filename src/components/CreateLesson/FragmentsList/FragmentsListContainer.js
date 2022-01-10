import React from "react";
import {connect} from "react-redux";
import FragmentsList from "./FragmentsList";
import Preloader from "../../common/Preloader/Preloader";
import {getFragments} from "../../../redux/catalogFragmentsReducer";

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
		const page = this.props.role === 'student' ? 'favorite' : this.props.page;
		this.props.getFragments(page, this.props.currentPage);
	};

	changePage = (page) => {
		const pageName = this.props.role === 'student' ? 'favorite' : this.props.page;
		this.props.getFragments(pageName, page);
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
	role: state.auth.role,
	myFragments: state.catalogFragments.fragments,
	currentPage: state.catalogFragments.currentPage,
	nextPage: state.catalogFragments.nextPage,
	prevPage: state.catalogFragments.prevPage,
	lastPage: state.catalogFragments.lastPage,
	pageSize: state.catalogFragments.pageSize,
	isFetching: state.catalogFragments.isFetching,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType,
	title: state.createLesson.title
});

export default connect(mapStateToProps, {getFragments})(FragmentsListContainer);