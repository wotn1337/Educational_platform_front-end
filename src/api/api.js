import {instance} from "./instance";
const TOKEN_TYPE = 'Bearer';


export const authAPI = {
	login(email, password) {
		return instance.post('login', JSON.stringify({email, password}));
	},

	register(name, birthday, role, email, password) {
		return instance.post('register', JSON.stringify({name, birthday, role, email, password}));
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
		return instance.post('user/me/avatar', JSON.stringify({avatar}), {
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