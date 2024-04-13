import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signoutUser } from '../../api/Auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    toast.dismiss();
  }, [location]);

  const signoutMutation = useMutation({
    mutationFn: signoutUser,
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'An error occurred', {
        toastId: error.response?.data?.message
      })
    },
  })

  const signOutClick = async () => {
    if (signoutMutation.isLoading) {
      return;
    }

    signoutMutation.mutate();
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col">
        <Link to="/dashboard">Go to dashboard</Link>
        <Link to="/surveys">Go to survey</Link>

        
      </div>

      <button onClick={signOutClick}>
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;