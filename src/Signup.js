import { useState, useEffect } from 'react';
import './signup.scss';
import { useNavigate } from 'react-router-dom';
import { signUp } from './api/auth';

function Signup() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/todo');
		}
	}, []);

	function onChangeHandler(e) {
		const { value, name } = e.target ?? {};
		setInput({ ...input, [name]: value });
	}

	async function signupHandler(e) {
		try {
			const { email, password } = input;
			e.preventDefault();
			const data = await signUp({ email, password });
			if (data.status === 201) {
				navigate('/signin');
				alert('회원가입 완료!');
			}
		} catch (e) {
			if (e.toJSON().status === 400) alert('동일한 이메일이 이미 존재합니다.');
		}
	}

	const disabled = !input.email.includes('@') || input.password.length < 8;

	return (
		<main className='signup'>
			<h1 className='signup__title'>회원가입 하기</h1>
			<form className='signup__form'>
				<div className='signup__input'>
					<label>이메일</label>
					<input
						placeholder='이메일을 입력해주세요'
						data-testid='email-input'
						value={input.email}
						name='email'
						onChange={onChangeHandler}
					/>
				</div>
				<div className='signup__input'>
					<label>비밀번호</label>
					<input
						placeholder='비밀번호를 입력해주세요'
						data-testid='password-input'
						value={input.password}
						name='password'
						onChange={onChangeHandler}
					/>
				</div>
				<button
					onClick={signupHandler}
					disabled={disabled}
					className='signup__button'
					data-testid='signup-button'
				>
					회원가입
				</button>
			</form>
		</main>
	);
}

export default Signup;
