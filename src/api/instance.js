import axios from "axios";


export const instance = axios.create({
	baseURL: 'https://youngeek-test.na4u.ru/back-end/public/api/',
	headers: {
		'Content-Type': 'application/json'
	}
});