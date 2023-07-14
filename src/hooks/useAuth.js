import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsVerify,
  selectAuthError,
  selectIsRefreshing,
  selectToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerify = useSelector(selectIsVerify);
  const isRefreshing = useSelector(selectIsRefreshing);
  const authError = useSelector(selectAuthError);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isVerify,
    isRefreshing,
    authError,
    user,
    token,
  };
};
