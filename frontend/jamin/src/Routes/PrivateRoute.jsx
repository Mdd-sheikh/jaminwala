import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  // Optional: basic JWT expiry check
  const isTokenValid = (token) => {
    if (!token) return false;
    try {
      const { exp } = JSON.parse(atob(token.split('.')[1]));
      return exp * 1000 > Date.now();
    } catch {
      return false; // malformed token
    }
  };

  return isTokenValid(token)
    ? <Outlet />
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;