import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Todo from './Todo';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <div>404 Not Found</div>,
		},
		{
			path: '/signup',
			element: <Signup />,
		},
		{
			path: '/signin',
			element: <Signin />,
		},
		{
			path: '/todo',
			element: <Todo />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
