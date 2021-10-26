import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {withRouter} from "react-router-dom";
import {getFragment} from "../../redux/fragmentReducer";


class FragmentContainer extends React.Component {
	componentDidMount() {
		const id = this.props.match.params.id.substr(1);
		this.props.getFragment(this.props.token, id);
	}

	render() {
		return <Fragment {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
	title: state.fragment.title,
	content: state.fragment.content,
	type: state.fragment.type,
	creator: state.fragment.creator,
	creatorId: state.fragment.creatorId,
});

export default compose(
	connect(mapStateToProps, {getFragment}),
	withRouter,
	withoutAuthRedirectToAuthPage
)(FragmentContainer);