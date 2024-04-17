import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyToken } from '../api/Auth';
import { isCurrentUserSetupDone } from '../api/User';
import useAuthStore from '../stores/AuthStore';

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSetupDone, setIsSetupDone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const authStore = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await verifyToken();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const isSetupDone = await isCurrentUserSetupDone();
        setIsSetupDone(isSetupDone);
      }
  
      setIsLoading(false);
      isAuthenticated ? authStore.login() : authStore.logout();
    }
  
    checkAuth();
  }, [location]);  

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      if (!isSetupDone && location.pathname !== '/setup') {
        return navigate('/setup');
      } 
      else if (isSetupDone && location.pathname === '/setup') {
        return navigate('/dashboard');
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;