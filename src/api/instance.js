import axios from "axios";


export const instance = axios.create({
	baseURL: 'https://youngeek-test.na4u.ru/api/',
	headers: {
		'Content-Type': 'application/json'
	}
});