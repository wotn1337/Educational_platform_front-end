import {instance} from "./instance";
import axios from "axios";

const TOKEN_TYPE = 'Bearer';
let TOKEN = localStorage.getItem('token');
const fullUrl = 'https://youngeek-test.na4u.ru/api/';

const authConfig = () => ({
	headers: {
		'Authorization': `${TOKEN_TYPE} ${TOKEN}`
	}
});

const createTagsString = (tags) => {
	let tagsString = '';
	if (tags) {
		for (const tag of tags) {
			tagsString += `&tags[]=${tag}`;
		}
	}
	return tagsString;
}

const fragmentsQueryParams = (page, title, type, tags, ageLimitId) => {
	const tagsQuery = createTagsString(tags)
	const titleQuery = title ? `&title=${title}` : ''
	const typeQuery = type ? `&type=${type}` : ''
	const ageQuery = ageLimitId ? `&ageLimit=${ageLimitId}` : ''

	return `?page=${page}${titleQuery}${typeQuery}${tagsQuery}${ageQuery}`
}

const lessonsQueryParams = (page, title, teacherName, tags, ageLimitId) => {
	const tagsQuery = createTagsString(tags)
	const titleQuery = title ? `&title=${title}` : ''
	const teacherQuery = teacherName ? `&creator=${teacherName}` : ''
	const ageQuery = ageLimitId ? `&ageLimit=${ageLimitId}` : ''

	return `?page=${page}${titleQuery}${teacherQuery}${tagsQuery}${ageQuery}`
}

export const authAPI = {
	// Авторизует ранее зарегистрированного пользователя
	login(data) {
		const promise = instance.post('login', JSON.stringify(data));
		promise.then(res => {
			TOKEN = res.data.token;
			localStorage.setItem('token', res.data.token);
		});
		return promise;
	},

	// Регистрирует нового пользователя
	register(data) {
		const promise = instance.post('register', JSON.stringify(data));
		promise.then(res => {
			TOKEN = res.data.token;
			localStorage.setItem('token', res.data.token);
		});
		return promise;
	},

	// Для выхода авторизованного пользователя из системы
	logout() {
		return instance.post('logout', {}, authConfig());
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
	getProfile() {
		return instance.get('user/me', authConfig());
	},

	// Изменить данные своего профиля
	updateProfile(name, birthday) {
		return instance.patch('user/me', JSON.stringify({name, birthday}), authConfig());
	},

	// Обновить свой аватар
	//Не использует instance, потому что Content-type - FormData с файлом
	updateAvatar(avatar) {
		return axios.post(`${fullUrl}user/me/avatar`, avatar, authConfig());
	},

	// Удалить свой аватар
	deleteAvatar() {
		return instance.delete('user/me/avatar', authConfig());
	},

	// Смена пароля из профиля для авторизованного пользователя
	changePassword(password) {
		return instance.patch('user/me/password', JSON.stringify({password}), authConfig());
	},

	// Получить данные для профиля конкретного учителя
	getTeacherProfile(id) {
		return instance.get(`user/teachers/${id}`, authConfig());
	},

	// Получить список всех преподавателей
	getTeachers(page, name = null) {
		return instance.get(`user/teachers?page=${page}${name ? `&name=${name}` : ''}`, authConfig());
	}
};

export const adminAPI = {
	// Авторизация админа
	adminLogin(data) {
		return instance.post('admin/login', JSON.stringify(data));
	},

	// Получить список всех пользователей
	getUsers(token, pageNumber) {
		return instance.get(`admin/users?page=${pageNumber}`, authConfig(token));
	},

	// Зарегистрировать нового пользователя
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

	// Заблокировать пользователя
	blockUser(token, id) {
		return instance.patch(`admin/users/${id}/block`, {}, authConfig(token));
	},

	// Разблокировать пользователя
	unblockUser(token, id) {
		return instance.patch(`admin/users/${id}/unblock`, {}, authConfig(token));
	},

	// Получить "черный список" пользователей
	getBlockedUsers(token, pageNumber) {
		return instance.get(`admin/users/blocked?page=${pageNumber}`, authConfig(token));
	},

	// Редактировать данные пользователя
	changeUserData(token, id, data) {
		return instance.patch(`admin/users/${id}`, JSON.stringify(data), authConfig(token));
	}
};

export const fragmentsAPI = {
	// Создать новый фрагмент
	createFragment(type, title, content, tagsIds, fon, annotation, gameType, task, ageLimitId) {
		const data = new FormData();
		data.append('type', type);
		data.append('title', title);

		for (const id of tagsIds) {
			data.append('tags[]', id);
		}

		if (fon)
			data.append('fon', fon);

		if (type === 'image')
			data.append('annotation', annotation);

		if (type === 'game'){
			data.append('gameType', gameType);
			if (task) data.append('task', task);
			if (gameType === 'pairs' || gameType === 'sequences') {
				for (const image of content.images) {
					data.append('content[]', image);
				}
			} else if (gameType==='puzzles') {
				data.append('content', content.image);
				data.append('cols', content.cols);
				data.append('rows', content.rows);
			} else {
				for (let i = 0; i < content.length; i++)
				{
					for(const c of content[i]) {
						data.append(`content[${i}][]`, c);
					}
				}
			}
		} else {
			data.append('content', content);
		}

		data.append('ageLimit', ageLimitId)

		return axios.post(`${fullUrl}fragments`, data, authConfig());
	},

	// Получить список всех фрагментов
	getFragments(page, title = null, type = null, tags = null, ageLimitId = null) {
		return instance.get(`fragments${fragmentsQueryParams(page, title, type, tags, ageLimitId)}`, authConfig());
	},

	// Получить список фрагментов текущего пользователя (только для учителя)
	geMyFragments(page, title = null, type = null, tags = null, ageLimitId = null) {
		return instance.get(`my-fragments${fragmentsQueryParams(page, title, type, tags, ageLimitId)}`, authConfig());
	},

	// Получить данные конкретного фрагмента
	getFragment(id) {
		return instance.get(`fragments/${id}`, authConfig());
	},

	// Удалить фрагмент (только для админа или владельца фрагмента)
	deleteFragment(id) {
		return instance.delete(`fragments/${id}`, authConfig())
	},

	// Редактировать фрагмент (только для админа или владельца фрагмента)
	editFragment(id, type, title, content, tagsIds, annotation, fon, oldLinks, gameType, task, metaImagesData) {
		const data = new FormData();
		data.append('title', title);
		if (typeof task !== 'undefined')
			data.append('task', task);

		if (typeof content !== 'string' && typeof content !== 'undefined' && content !== null && type !== 'game')
			data.append('content', content);
		else if (type === 'game') {
			if (gameType === 'matchmaking') {
				for (let i = 0; i < content?.length; i++) {
					for (const c of content[i]) {
						data.append(`content[${i}][]`, c);
					}
				}
			} else if (gameType==='puzzles') {
				data.append('content', content?.image);
				data.append('cols', content?.cols);
				data.append('rows', content?.rows);
			}  else {
				for (const image of content?.images) {
					if (typeof image !== 'string' || gameType === 'sequences') {
						data.append('content[]', image)
					}
				}
				data.append('metaImagesData', JSON.stringify(metaImagesData))
			}
		}

		for (const tag of tagsIds) {
			data.append('tags[]', tag);
		}

		if (gameType === 'pairs') {
			for (const links of oldLinks) {
				data.append('oldLinks[]', links);
			}
		}
      
		data.append('annotation', annotation);

		if (typeof fon !== 'string' && typeof fon !== 'undefined' && fon !== null)
			data.append('fon', fon);

		return instance.post(`fragments/${id}?_method=PATCH`, data, authConfig());
	},

	// Получить список всех возможных тегов
	getTags() {
		return instance.get('tags', authConfig());
	},

	// Получить список всех шаблонов игр
	getGames() {
		return instance.get('teacher/fragments/games/types', authConfig());
	},

	// Получить список избранного для конкретного пользователя
	getFavorites(page, title = null, type = null, tags = null, ageLimitId = null) {
		return instance.get(`fragments/like${fragmentsQueryParams(page, title, type, tags, ageLimitId)}`, authConfig())
	},

	// Добавить/удалить фрагмент в избранное
	changeFavorite(id) {
		return instance.put(`fragments/${id}`, '', authConfig());
	},

	// Получить список фрагментов конкретного преподавателя
	getTeacherFragments(id, page) {
		return instance.get(`teacher/fragments/${id}?page=${page}`, authConfig());
	}
};

export const lessonsAPI = {
	// Создать урок
	createLesson(title, annotation, fragments, tags, fon, ageLimitId) {
		const data = new FormData();
		data.append('title', title);
		data.append('annotation', annotation);
		for (const fragment of fragments) {
			data.append('fragments[]', fragment);
		}
		for (const id of tags) {
			data.append('tags[]', id);
		}
		if (fon)
			data.append('fon', fon);
		data.append('ageLimit', ageLimitId)

		return instance.post(`${fullUrl}lessons`, data, authConfig());
	},

	// Получить список всех уроков
	getLessons(page, title, teacherName, tags, ageLimitId) {
		return instance.get(`lessons${lessonsQueryParams(page, title, teacherName, tags, ageLimitId)}`, authConfig())
	},

	// Получить список уроков текущего пользователя
	getMyLessons(page, title, teacherName, tags, ageLimitId) {
		return instance.get(`my-lessons${lessonsQueryParams(page, title, teacherName, tags, ageLimitId)}`, authConfig())
	},

	// Получить список избранных уроков текущего пользователя
	getFavoriteLessons(page, title, teacherName, tags, ageLimitId) {
		return instance.get(`lessons/like${lessonsQueryParams(page, title, teacherName, tags, ageLimitId)}`, authConfig())
	},

	// Получить уроки конкретного преподавателя
	getTeacherLessons(id, page) {
		return instance.get(`teacher/lessons/${id}?page=${page}`, authConfig());
	},

	// Получить данные конкретного урока
	getLesson(id) {
		return instance.get(`lessons/${id}`, authConfig())
	},

	// Удалить урок
	deleteLesson(id) {
		return instance.delete(`lessons/${id}`, authConfig());
	},

	// Добавить / удалить урок из избранного
	toggleFavorite(id) {
		return instance.put(`lessons/${id}`, {}, authConfig());
	},

	// Редактировать урок
	updateLesson(id, title, annotation, fragments, tags, fon) {
		const data = new FormData();
		data.append('title', title);
		data.append('annotation', annotation);
		for (const f of fragments) {
			data.append('fragments[]', f);
		}
		for (const tag of tags) {
			data.append('tags[]', tag);
		}
		if (typeof fon !== 'string' && typeof fon !== 'undefined' && fon !== null)
			data.append('fon', fon);
		return instance.post(`lessons/${id}?_method=PATCH`, data, authConfig());
	}
}

export const ageLimits = {
	getAgeLimits() {
		return instance.get('fragments/age-limits', authConfig())
	}
}