import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyToken } from '../api/Auth';

const PublicRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await verifyToken();
      setIsAuthenticated(isAuthenticated);
      setIsLoading(false);
    }

    checkAuth();
  }, [location]);

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default PublicRoutes;