import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('token');

  const isTokenValid = (token) => {
    if (!token) return false;
    try {
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      return exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  return isTokenValid(token)
    ? <Navigate to="/home" replace />
    : <Outlet />;
};

export default PublicRoute;