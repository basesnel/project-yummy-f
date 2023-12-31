import { useSearchParams } from 'react-router-dom';
import Signin from 'components/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { verify } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';

export default function SigninPage() {
  const [searchParams] = useSearchParams();
  const verifyId = searchParams.get('verify');

  const dispatch = useDispatch();

  if (verifyId) {
    setTimeout(() => dispatch(verify(verifyId)), 200);
  }

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <Signin />
    </>
  );
}
