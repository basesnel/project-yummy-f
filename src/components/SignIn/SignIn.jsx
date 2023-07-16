import SigninForm from 'components/SignIn/SigninForm/SigninForm';
import AuthImg from 'components/AuthContainer/AuthImg';
import AuthContainer from 'components/AuthContainer/AuthContainer';

export default function Signin() {
  return (
    <AuthContainer>
      <AuthImg />
      <SigninForm />
    </AuthContainer>
  );
}
