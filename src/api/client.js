import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop/';
const client = axios.create({
	baseURL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
});

export default client;
