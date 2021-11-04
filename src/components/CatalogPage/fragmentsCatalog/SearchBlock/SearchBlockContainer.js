import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import SearchBlock from "../../../MyFragments/SearchBlock/SearchBlock";
import {getFragments} from "../../../../redux/catalogFragmentsReducer";


class SearchBlockContainer extends React.Component {
	searchFragments = () => {
		this.props.getFragments(
			this.props.token,
			1,
			this.props.searchTitle,
			this.props.searchType
		);
	}

	render() {
		return (
			<SearchBlock {...this.props} searchFragments={this.searchFragments}/>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	searchTitle: state.catalogFragments.searchTitle,
	searchType: state.catalogFragments.searchType,
	totalFragmentsCount: state.catalogFragments.totalFragmentsCount
});

export default compose(
	connect(mapStateToProps, {getFragments}),
)(SearchBlockContainer)