import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {Redirect, withRouter} from "react-router-dom";
import {deleteFragment, editFragment, getFragment, setContent, setTitle} from "../../redux/fragmentReducer";


class FragmentContainer extends React.Component {
	state = {
		id: this.props.match.params.id.substr(1),
		isEdit: false
	}

	componentDidMount() {
		this.props.getFragment(this.props.token, this.state.id);
	}

	toggleIsEdit = () => {
		this.setState({isEdit : !this.state.isEdit});
	}

	deleteFragment = () => {
		this.props.deleteFragment(this.props.token, this.state.id);
		this.setState({id: ''});
	}

	editFragment = (newTitle, newContent) => {
		this.props.editFragment(
			this.props.token,
			this.state.id,
			newTitle,
			newContent
		)
			.then(() => this.props.setContent(this.props.content));
		this.toggleIsEdit();
	}

	render() {
		if (!this.state.id) {
			return <Redirect to={'/my-fragments'} />;
		}

		return <Fragment
			{...this.props}
			{...this.state}
			deleteFragment={this.deleteFragment}
			toggleIsEdit={this.toggleIsEdit}
			editFragment={this.editFragment}
		/>;
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
	connect(mapStateToProps, {getFragment, deleteFragment, editFragment, setTitle, setContent}),
	withRouter,
	withoutAuthRedirectToAuthPage
)(FragmentContainer);