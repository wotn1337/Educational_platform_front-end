import {connect} from 'react-redux';
import React from "react";
import {deleteAvatar, updateAvatar} from "../../../redux/profileReducer";
import UploadAvatar from "./UploadAvatar";


class ProfileFormContainer extends React.Component {
	updateAvatar = (avatar) => {
		const data = new FormData();
		data.append('avatar', avatar);
		this.props.updateAvatar(this.props.token, data);
	}

	deleteAvatar = () => {
		this.props.deleteAvatar(this.props.token);
	}

	render() {
		return <UploadAvatar {...this.props} updateAvatar={this.updateAvatar} deleteAvatar={this.deleteAvatar}/>;
	}
}


export const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
		isFetching: state.profile.isFetching
	};
};

export default connect(mapStateToProps, {updateAvatar, deleteAvatar})(ProfileFormContainer);
