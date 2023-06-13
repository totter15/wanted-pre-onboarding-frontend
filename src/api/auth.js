import client from './client';

export async function signUp({ email, password }) {
	const data = await client.post('auth/signup', { email, password });
	return data;
}

export async function signIn({ email, password }) {
	const data = await client.post('auth/signin', { email, password });
	return data;
}
