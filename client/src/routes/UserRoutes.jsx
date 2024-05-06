import Setup from '../pages/User/Setup';
import Dashboard from '../pages/User/Dashboard';
import Surveys from '../pages/User/Surveys';
import Settings from '../pages/User/Settings';

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
    element: <Surveys />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
];

export default UserRoutes;