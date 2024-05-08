import Setup from '../pages/User/Setup';
import Dashboard from '../pages/User/Dashboard';
import Surveys from '../pages/User/Surveys';
import Settings from '../pages/User/Settings';
import Responses from '../pages/User/Responses';
import Drafts from '../pages/User/Drafts';
import Trash from '../pages/User/Trash';

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
  {
    path: '/responses',
    element: <Responses />,
  },
  {
    path: '/drafts',
    element: <Drafts />,
  },
  {
    path: '/trash',
    element: <Trash />,
  },
];

export default UserRoutes;