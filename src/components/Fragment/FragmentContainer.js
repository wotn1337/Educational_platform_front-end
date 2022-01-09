import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withoutAuthRedirectToAuthPage} from "../hoc/withoutAuthRedirectToAuthPage";
import Fragment from "./Fragment";
import {
	addTag, changeFavorite,
	deleteFragment,
	deleteTag,
	editFragment,
	getFragment, setAnnotation,
	setContent, setFon,
	setTitle
} from "../../redux/fragmentReducer";
import Preloader from "../common/Preloader/Preloader";
import {returnTag} from "../../redux/allTagsReducer";
import {withRouter} from "react-router-dom";


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
		return this.props.deleteFragment(this.state.id)
			.then(() => this.setState({id: ''}));
	}

	editFragment = () => {
		this.props.editFragment(
			this.state.id,
			this.props.title,
			this.props.content,
			this.props.tagsIds,
			this.props.annotation,
			this.props.fon
		)
			.then(() => this.toggleIsEdit());
	}

	render() {
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
	annotation: state.fragment.annotation,
	type: state.fragment.type,
	creator: state.fragment.creator,
	creatorId: state.fragment.creatorId,
	creatorAvatar: state.fragment.creatorAvatar,
	isFetching: state.fragment.isFetching,
	tags: state.fragment.tags,
	tagsIds: state.fragment.tagsIds,
	favorite: state.fragment.favorite,
	favoriteFetching: state.fragment.favoriteFetching,
	fon: state.fragment.fon
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
		changeFavorite,
		setAnnotation,
		setFon
	}),
	withoutAuthRedirectToAuthPage,
	withRouter
)(FragmentContainer);