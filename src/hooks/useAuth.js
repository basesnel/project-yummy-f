import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectAuthError,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const authError = useSelector(selectAuthError);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    authError,
    user,
  };
};
