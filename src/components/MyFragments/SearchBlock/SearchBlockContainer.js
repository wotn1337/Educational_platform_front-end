import React from "react";
import {connect} from "react-redux";
import {getMyFragments, setSearchTitle, setSearchType} from "../../../redux/myFragmentsReducer";
import SearchBlock from "./SearchBlock";


class SearchBlockContainer extends React.Component {
	searchFragments = () => {
		this.props.geMyFragments(
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
	searchTitle: state.myFragments.searchTitle,
	searchType: state.myFragments.searchType,
	totalFragmentsCount: state.myFragments.totalFragmentsCount
});

export default connect(mapStateToProps, {
	geMyFragments: getMyFragments,
	setSearchTitle,
	setSearchType
})(SearchBlockContainer);