import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const { isLoggedIn, isRefreshing } = useAuth();
  // const { isLoggedIn } = useAuth();
  // const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
