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
	// Авторизует ранее зарегистрированного пользователя
	login(data) {
		return instance.post('login', JSON.stringify(data));
	},

	// Регистрирует пользователя
	register(data) {
		return instance.post('register', JSON.stringify(data));
	},

	// Для выхода авторизованного пользователя из системы
	logout(token) {
		return instance.post('logout', {}, authConfig(token));
	},

	// Получить на email ссылку для сброса пароля
	forgotPassword(email) {
		return instance.post('forgot-password', JSON.stringify({email}));
	},

	// Сбросить пароль
	resetPassword(email, password, token) {
		return instance.post(`reset-password?token=${token}`, JSON.stringify({email, password, token}));
	}
};

export const profileAPI = {
	// Получить данные для своего профиля
	getProfile(token) {
		return instance.get('user/me', authConfig(token));
	},

	// Изменить данные своего профиля
	updateProfile(token, name, birthday) {
		return instance.patch('user/me', JSON.stringify({name, birthday}), authConfig(token));
	},

	// Обновить свой аватар
	//Не использует instance, потому что Content-type - FormData с файлом
	updateAvatar(token, avatar) {
		return axios.post('http://localhost/api/user/me/avatar', avatar, authConfig(token));
	},

	// Удалить свой аватар
	deleteAvatar(token) {
		return instance.delete('user/me/avatar', authConfig(token));
	},

	// Смена пароля из профиля для авторизованного пользователя
	changePassword(token, password) {
		return instance.patch('user/me/password', JSON.stringify({password}), authConfig(token));
	},

	// Получить данные для профиля конкретного учителя
	getTeacherProfile(token, id) {
		return instance.get(`user/teachers/${id}`, authConfig(token));
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
			for (const id of tagsIds) {
				data.append('tags[]', id);
			}
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

	editFragment(token, id, title, content, tagsIds) {
		const data = content ? {title, content, tags: tagsIds} : {title, content: null, tags: tagsIds};
		return instance.patch(`fragments/${id}`, JSON.stringify(data), authConfig(token));
	},

	getTags(token) {
		return instance.get('tags', authConfig(token));
	}
};