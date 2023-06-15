import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop/';
const client = axios.create({
	baseURL,
});

client.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token');
	if (token) {
		return {
			...config,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
	}
	return config;
});

export default client;
