import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
	return (
		<main className='home'>
			<h1>Wanted Pre Onboarding Frontend</h1>

			<Link to='signin'>로그인 하러가기</Link>
			<Link to='signup'>회원가입 하러가기</Link>
		</main>
	);
}

export default Home;
