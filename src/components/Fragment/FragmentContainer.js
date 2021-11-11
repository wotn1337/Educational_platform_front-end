import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {Redirect, withRouter} from "react-router-dom";
import {
	addTag,
	deleteFragment,
	deleteTag,
	editFragment,
	getFragment,
	setContent,
	setTitle
} from "../../redux/fragmentReducer";
import Preloader from "../Preloader/Preloader";
import {fragmentTypes} from "../../common/fragmentTypes";
import {returnTag} from "../../redux/allTagsReducer";


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

	editFragment = () => {
		this.props.editFragment(
			this.props.token,
			this.state.id,
			this.props.title,
			this.props.type !== fragmentTypes.video && this.props.content
		)
			.then(() => this.props.setContent(this.props.content));
		this.toggleIsEdit();
	}

	render() {
		if (!this.state.id) {
			return <Redirect to={'/my-fragments'} />;
		}

		if (this.props.isFetching) {
			return <Preloader size={400}/>
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
	userId: state.auth.userId,
	role: state.auth.role,
	title: state.fragment.title,
	content: state.fragment.content,
	type: state.fragment.type,
	creator: state.fragment.creator,
	creatorId: state.fragment.creatorId,
	isFetching: state.fragment.isFetching,
	tags: state.fragment.tags
});

export default compose(
	connect(mapStateToProps, {
		getFragment,
		deleteFragment,
		editFragment,
		setTitle,
		setContent,
		deleteTag,
		addTag,
		returnTag
	}),
	withRouter,
	withoutAuthRedirectToAuthPage
)(FragmentContainer);