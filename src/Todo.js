import './todo.scss';
import TodoItem from './components/TodoItem';
import { createTodo, deleteTodo, getTodos, updateTodo } from './api/todo';
import { useEffect, useState } from 'react';

function Todo() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		getTodoHandler();
	}, []);

	function onChangeHandler(e) {
		setInput(e.target.value);
	}

	async function getTodoHandler() {
		const data = await getTodos();
		setTodos(data);
	}

	async function addTodoHandler() {
		await createTodo(input);
		await getTodoHandler();
		setInput('');
	}

	async function updateTodoHandler(id, todo, isCompleted) {
		await updateTodo(id, { todo, isCompleted });
		await getTodoHandler();
	}

	async function deleteTodoHandler(id) {
		await deleteTodo(id);
		await getTodoHandler();
	}

	return (
		<main className='todo'>
			<h1 className='todo__title'>TODO LIST</h1>
			<div className='todo__input'>
				<input
					value={input}
					onChange={onChangeHandler}
					placeholder='할일을 입력해주세요.'
					data-testid='new-todo-input'
				/>
				<button data-testid='new-todo-add-button' onClick={addTodoHandler}>
					추가
				</button>
			</div>
			{todos.length > 0 ? (
				<ul className='todo__list'>
					{todos.map((todo) => (
						<TodoItem
							item={todo}
							key={todo.id}
							updateTodoHandler={updateTodoHandler}
							deleteTodoHandler={deleteTodoHandler}
						/>
					))}
				</ul>
			) : (
				<div className='todo__empty-todo'>할일을 추가해 주세요.</div>
			)}
		</main>
	);
}

export default Todo;
