import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';

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
	]);

	return <RouterProvider router={router} />;
}

export default App;
