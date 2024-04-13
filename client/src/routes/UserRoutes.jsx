import Dashboard from '../pages/User/Dashboard';
import Survey from '../pages/User/Survey';

const UserRoutes = [
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