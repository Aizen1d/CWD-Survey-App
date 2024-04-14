import Setup from '../pages/User/Setup';
import Dashboard from '../pages/User/Dashboard';
import Survey from '../pages/User/Survey';

const UserRoutes = [
  {
    path: '/setup',
    element: <Setup />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/surveys',
    element: <Survey />,
  }
];

export default UserRoutes;