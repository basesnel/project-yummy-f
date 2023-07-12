import { useSearchParams } from 'react-router-dom';
import Signin from 'components/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { verify } from 'redux/auth/operations';

export default function SigninPage() {
  const [searchParams] = useSearchParams();
  const verifyId = searchParams.get('verify');

  const dispatch = useDispatch();

  if (verifyId) {
    dispatch(verify(verifyId));
  }

  return <Signin />;
}
