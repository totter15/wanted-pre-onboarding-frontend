import { useState } from 'react';

function TodoItem({ item, submitHandler, deleteHandler }) {
	const { todo, isComplete } = item ?? {};

	const [isEdit, setIsEdit] = useState(false);
	const [modifyInput, setModifyInput] = useState(todo);

	function onChangeHandler(e) {
		setModifyInput(e.target.value);
	}

	function cancelHandler() {
		setIsEdit(false);
	}
	function editHandler() {
		setIsEdit(true);
	}

	return (
		<li className='todo__list-item'>
			{isEdit ? (
				<>
					<label>
						<input type='checkbox' checked={isComplete} />
						<input
							data-testid='modify-input'
							value={modifyInput}
							onChange={onChangeHandler}
						/>
					</label>
					<button data-testid='submit-button' onClick={submitHandler}>
						제출
					</button>
					<button data-testid='cancel-button' onClick={cancelHandler}>
						취소
					</button>
				</>
			) : (
				<>
					<label>
						<input type='checkbox' checked={isComplete} />
						<span>{todo}</span>
					</label>
					<button data-testid='modify-button' onClick={editHandler}>
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
