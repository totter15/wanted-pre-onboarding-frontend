import { useEffect, useState } from 'react';
import './signin.scss';
import { signIn } from './api/auth';
import { useNavigate } from 'react-router-dom';

function Signin() {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		email: '',
		password: '',
	});
	const { email, password } = input;

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/todo');
		}
	}, []);

	function onChangeHandler(e) {
		const { value, name } = e.target ?? {};
		setInput({ ...input, [name]: value });
	}

	async function signinHandler(e) {
		e.preventDefault();

		try {
			const { email, password } = input;
			const data = await signIn({ email, password });

			if (data.status === 200) {
				const { access_token } = data.data;

				//로컬스토리지 저장
				localStorage.setItem('token', access_token);
				navigate('/todo');
			}
		} catch (e) {
			if (e.toJSON().status === 404 || e.toJSON().status === 401)
				alert('해당 사용자가 존재하지 않습니다.');
		}
	}

	const disabled = !input.email.includes('@') || input.password.length < 8;

	return (
		<main className='signin'>
			<h1 className='signin__title'>로그인 하기</h1>
			<form className='signin__form'>
				<div className='signin__input'>
					<label htmlFor='email'>이메일</label>
					<input
						id='email'
						data-testid='email-input'
						placeholder='이메일을 입력해주세요'
						name='email'
						value={email}
						onChange={onChangeHandler}
					/>
					{input.email.length > 0 && !input.email.includes('@') && (
						<div className='signin__error-text'>
							이메일에는 @가 포함되어야 합니다.
						</div>
					)}
				</div>
				<div className='signin__input'>
					<label htmlFor='password'>비밀번호</label>
					<input
						id='password'
						data-testid='password-input'
						placeholder='비밀번호를 입력해주세요'
						name='password'
						value={password}
						onChange={onChangeHandler}
					/>
					{input.password.length > 0 && input.password.length < 8 && (
						<div className='signin__error-text'>
							비밀번호는 8자 이상이어야 합니다.
						</div>
					)}
				</div>
				<button
					onClick={signinHandler}
					disabled={disabled}
					data-testid='signin-button'
					className='signin__button'
				>
					로그인
				</button>
			</form>
		</main>
	);
}

export default Signin;
