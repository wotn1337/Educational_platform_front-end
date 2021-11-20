import {connect} from 'react-redux';
import React from "react";
import {deleteAvatar, updateAvatar} from "../../../redux/profileReducer";
import UploadAvatar from "./UploadAvatar";


class ProfileFormContainer extends React.Component {
	updateAvatar = (avatar) => {
		const data = new FormData();
		data.append('avatar', avatar);
		this.props.updateAvatar(data);
	}

	render() {
		return <UploadAvatar {...this.props} updateAvatar={this.updateAvatar}/>;
	}
}


export const mapStateToProps = (state) => ({
	isFetching: state.profile.isFetching
});

export default connect(mapStateToProps, {updateAvatar, deleteAvatar})(ProfileFormContainer);
