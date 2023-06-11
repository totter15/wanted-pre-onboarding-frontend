import axios from 'axios';

const baseURL = 'https://www.pre-onboarding-selection-task.shop/auth';
const client = axios.create({
	baseURL,
});

export async function signUp({ email, password }) {
	const data = await client.post('/signup', { email, password });
	return data;
}

export async function signIn({ email, password }) {
	const data = await client.post('/signin', { email, password });
	return data;
}
