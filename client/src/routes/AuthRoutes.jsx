import Login from '../pages/Login';
import Signup from '../pages/Signup';

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