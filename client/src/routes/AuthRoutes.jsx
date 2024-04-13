import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';

const AuthRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
];

export default AuthRoutes;