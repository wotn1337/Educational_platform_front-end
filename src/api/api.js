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