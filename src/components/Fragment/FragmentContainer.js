import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {Redirect, withRouter} from "react-router-dom";
import {
	addTag, changeFavorite,
	deleteFragment,
	deleteTag,
	editFragment,
	getFragment,
	setContent,
	setTitle
} from "../../redux/fragmentReducer";
import Preloader from "../../common/Preloader/Preloader";
import {fragmentTypes} from "../../common/fragmentTypes";
import {returnTag} from "../../redux/allTagsReducer";


class FragmentContainer extends React.Component {
	state = {
		id: this.props.match.params.id,
		isEdit: false
	}

	componentDidMount() {
		this.props.getFragment(this.state.id);
	}

	toggleIsEdit = () => {
		this.setState({isEdit : !this.state.isEdit});
	}

	deleteFragment = () => {
		this.props.deleteFragment(this.state.id);
		this.setState({id: ''});
	}

	editFragment = () => {
		this.props.editFragment(
			this.state.id,
			this.props.title,
			this.props.type !== fragmentTypes.video && this.props.content,
			this.props.tagsIds
		)
			.then(() => this.props.setContent(this.props.content));
		this.toggleIsEdit();
	}

	render() {
		if (!this.state.id) {
			return <Redirect to={'/catalog'} />;
		}

		if (this.props.isFetching) {
			return <Preloader size={200}/>
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
	userId: state.auth.userId,
	role: state.auth.role,
	title: state.fragment.title,
	content: state.fragment.content,
	type: state.fragment.type,
	creator: state.fragment.creator,
	creatorId: state.fragment.creatorId,
	creatorAvatar: state.fragment.creatorAvatar,
	isFetching: state.fragment.isFetching,
	tags: state.fragment.tags,
	tagsIds: state.fragment.tagsIds,
	favorite: state.fragment.favorite,
	favoriteFetching: state.fragment.favoriteFetching
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
		returnTag,
		changeFavorite
	}),
	withRouter,
	withoutAuthRedirectToAuthPage
)(FragmentContainer);