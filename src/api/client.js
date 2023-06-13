import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop/';
const client = axios.create({
	baseURL,
});

export default client;
