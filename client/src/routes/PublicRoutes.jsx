import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = () => {
  const isAuthenticated = !true;

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default PublicRoutes;