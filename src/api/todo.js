import client from './client';

export async function createTodo(todo) {
	const { data } = await client.post('todos', { todo });
	return data;
}

export async function getTodos() {
	const { data } = await client.get('todos');
	return data;
}

export async function updateTodo(id, todoData) {
	const { data } = await client.put(`todos/${id}`, todoData);
	return data;
}

export async function deleteTodo(id) {
	const data = await client.delete(`todo/${id}`);
	return data;
}
