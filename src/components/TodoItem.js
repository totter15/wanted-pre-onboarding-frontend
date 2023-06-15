import { useState } from 'react';

function TodoItem({ item, updateTodoHandler, deleteTodoHandler }) {
	const { todo, isCompleted, id } = item ?? {};

	const [isEdit, setIsEdit] = useState(false);
	const [modifyTodo, setModifyTodo] = useState(todo);

	function onChangeHandler(e) {
		setModifyTodo(e.target.value);
	}

	function checkHandler(e) {
		updateTodoHandler(id, todo, e.target.checked);
	}

	function submitHandler() {
		updateTodoHandler(id, modifyTodo, isCompleted);
		setIsEdit(false);
	}

	function deleteHandler() {
		deleteTodoHandler(id);
	}

	return (
		<li className='todo__list-item'>
			{isEdit ? (
				<>
					<label>
						<input
							type='checkbox'
							defaultChecked={isCompleted}
							onChange={checkHandler}
						/>
						<input
							data-testid='modify-input'
							value={modifyTodo}
							onChange={onChangeHandler}
						/>
					</label>
					<button data-testid='submit-button' onClick={submitHandler}>
						제출
					</button>
					<button data-testid='cancel-button' onClick={() => setIsEdit(false)}>
						취소
					</button>
				</>
			) : (
				<>
					<label>
						<input
							type='checkbox'
							defaultChecked={isCompleted}
							onChange={checkHandler}
						/>
						<span>{todo}</span>
					</label>
					<button data-testid='modify-button' onClick={() => setIsEdit(true)}>
						수정
					</button>
					<button data-testid='delete-button' onClick={deleteHandler}>
						삭제
					</button>
				</>
			)}
		</li>
	);
}

export default TodoItem;
