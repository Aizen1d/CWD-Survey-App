import Setup from '../pages/User/Setup';
import Dashboard from '../pages/User/Dashboard';

import Surveys from '../pages/User/Surveys';
import SurveysCreate from '../pages/User/SurveysCreate';
import SurveysView from '../pages/User/SurveysView';
import SurveysCustomize from '../pages/User/SurveysCustomize';

import Settings from '../pages/User/Settings';

import Responses from '../pages/User/Responses';
import ResponsesView from '../pages/User/ResponsesView';

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
    path: '/surveys/create',
    element: <SurveysCreate />,
  },
  {
    path: '/surveys/view',
    element: <SurveysView />,
  },
  {
    path: '/surveys/customize',
    element: <SurveysCustomize />,
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
    path: '/responses/view',
    element: <ResponsesView />,
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