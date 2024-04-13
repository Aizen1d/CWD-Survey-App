import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyToken } from '../api/Auth';
import useAuthStore from '../stores/AuthStore';

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const authStore = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await verifyToken();
      setIsAuthenticated(isAuthenticated);
      setIsLoading(false);

      isAuthenticated ? authStore.login() : authStore.logout();
    }

    checkAuth();
  }, [location]);

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;