import {instance} from "./instance";
import axios from "axios";
const TOKEN_TYPE = 'Bearer';


export const authAPI = {
	login(data) {
		return instance.post('login', JSON.stringify(data));
	},

	register(data) {
		return instance.post('register', JSON.stringify(data));
	},

	logout(token) {
		return instance.post('logout', {}, {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	}
};

export const profileAPI = {
	getProfile(token) {
		return instance.get('user/me', {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	},

	updateProfile(token, name, birthday) {
		return instance.patch('user/me', JSON.stringify({name, birthday}),{
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	},

	updateAvatar(token, avatar) {
		return axios.post('http://localhost/api/user/me/avatar', avatar, {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	},

	deleteAvatar(token) {
		return instance.delete('user/me/avatar', {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
	}
};

export const adminAPI = {
	adminLogin(email, password) {
		return instance.post('admin/login', JSON.stringify({email, password}));
	},

	getUsers(token, pageNumber) {
		return instance.get(`admin/users?page=${pageNumber}`, {
			headers: {
				'Authorization': `${TOKEN_TYPE} ${token}`
			}
		});
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
	}
};