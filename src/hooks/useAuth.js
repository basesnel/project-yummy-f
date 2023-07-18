import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsVerify,
  selectAuthError,
  selectIsRefreshing,
  selectToken,
  selectSubscribeMessage,
  selectStore,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isVerify = useSelector(selectIsVerify);
  const isRefreshing = useSelector(selectIsRefreshing);
  const authError = useSelector(selectAuthError);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const showSubscribeMessage = useSelector(selectSubscribeMessage);
  const store = useSelector(selectStore);

  return {
    isLoggedIn,
    isVerify,
    isRefreshing,
    authError,
    user,
    token,
    showSubscribeMessage,
    store,
  };
};
