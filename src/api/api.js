import {instance} from "./instance";


export const authAPI = {
	login(email, password) {
		return instance.post('login', JSON.stringify({email, password}));
	},

	register(name, birthday, role, email, password) {
		return instance.post('register', JSON.stringify({name, birthday, role, email, password}));
	},

	logout(tokenType, token) {
		return instance.post('logout', {}, {
			headers: {
				'Authorization': `${tokenType} ${token}`
			}
		});
	}
};

export const profileAPI = {
	getProfile(tokenType, token) {
		return instance.get('user/me', {
			headers: {
				'Authorization': `${tokenType} ${token}`
			}
		});
	},

	updateProfile(tokenType, token, name, birthday) {
		return instance.patch('user/me', JSON.stringify({name, birthday}),{
			headers: {
				'Authorization': `${tokenType} ${token}`
			}
		});
	},

	updateAvatar(tokenType, token, avatar) {
		return instance.post('user/me/avatar', JSON.stringify({avatar}), {
			headers: {
				'Authorization': `${tokenType} ${token}`
			}
		});
	}
};

export const adminAPI = {
	adminLogin(email, password) {
		return instance.post('admin/login', JSON.stringify({email, password}));
	},

	getUsers(tokenType, token) {
		return instance.get('admin/users', {
			headers: {
				'Authorization': `${tokenType} ${token}`
			}
		});
	}
};