import {instance} from "./instance";
import axios from "axios";
import {fragmentTypes} from "../common/fragmentTypes";
const TOKEN_TYPE = 'Bearer';
const authConfig = (token) => ({
	headers: {
		'Authorization': `${TOKEN_TYPE} ${token}`
	}
});


export const authAPI = {
	login(data) {
		return instance.post('login', JSON.stringify(data));
	},

	register(data) {
		return instance.post('register', JSON.stringify(data));
	},

	logout(token) {
		return instance.post('logout', {}, authConfig(token));
	},

	forgotPassword(email) {
		return instance.post('forgot-password', JSON.stringify({email}));
	},

	resetPassword(email, password, token) {
		return instance.post(`reset-password?token=${token}`, JSON.stringify({email, password, token}));
	}
};

export const profileAPI = {
	getProfile(token) {
		return instance.get('user/me', authConfig(token));
	},

	updateProfile(token, name, birthday) {
		return instance.patch('user/me', JSON.stringify({name, birthday}), authConfig(token));
	},

	//Не использует instance, потому что Content-type - FormData с файлом
	updateAvatar(token, avatar) {
		return axios.post('http://localhost/api/user/me/avatar', avatar, authConfig(token));
	},

	deleteAvatar(token) {
		return instance.delete('user/me/avatar', authConfig(token));
	},

	changePassword(token, password) {
		return instance.patch('user/me/password', JSON.stringify({password}), authConfig(token));
	}
};

export const adminAPI = {
	adminLogin(data) {
		return instance.post('admin/login', JSON.stringify(data));
	},

	getUsers(token, pageNumber) {
		return instance.get(`admin/users?page=${pageNumber}`, authConfig(token));
	},

	registerNewUser(token, newUserData) {
		return instance.post('admin/users', JSON.stringify({
			name: newUserData.name,
			email: newUserData.email,
			password: newUserData.password,
			role: newUserData.role
		}), {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	},

	blockUser(token, id) {
		return instance.patch(`admin/users/${id}/block`, {}, authConfig(token));
	},

	unblockUser(token, id) {
		return instance.patch(`admin/users/${id}/unblock`, {}, authConfig(token));
	},

	getBlockedUsers(token, pageNumber) {
		return instance.get(`admin/users/blocked?page=${pageNumber}`, authConfig(token));
	},

	changeUserData(token, id, data) {
		return instance.patch(`admin/users/${id}`, JSON.stringify(data), authConfig(token));
	}
};

export const fragmentsAPI = {
	createFragment(token, type, title, content, tagsIds) {
		if (type === fragmentTypes.video) {
			const data = new FormData();
			data.append('type', type);
			data.append('title', title);
			data.append('content', content);
			data.append('tags', tagsIds)
			return axios.post('http://localhost/api/fragments', data, authConfig(token));
		}
		return instance.post('fragments', JSON.stringify({type, title, content, tags: tagsIds}), authConfig(token));
	},

	getFragments(token, page, title = null, type = null) {
		return instance.get(`fragments?page=${page}${title ? `&title=${title}` : ''}${type ? `&type=${type}` : ''}`, authConfig(token));
	},

	geMyFragments(token, page, title = null, type = null) {
		return instance.get(`my-fragments?page=${page}${title ? `&title=${title}` : ''}${type ? `&type=${type}` : ''}`, authConfig(token));
	},

	getFragment(token, id) {
		return instance.get(`fragments/${id}`, authConfig(token));
	},

	deleteFragment(token, id) {
		return instance.delete(`fragments/${id}`, authConfig(token))
	},

	editFragment(token, id, title, content) {
		const data = content ? {title, content} : {title, content: null};
		return instance.patch(`fragments/${id}`, JSON.stringify(data), authConfig(token));
	},

	getTags(token) {
		return instance.get('tags', authConfig(token));
	}
};