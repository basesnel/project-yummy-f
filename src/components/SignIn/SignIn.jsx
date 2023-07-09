import SigninForm from 'components/SignIn/SigninForm/SigninForm';
import SigninImg from 'components/SignIn/SigninImg';
import { SigninContainer } from 'components/SignIn/SignIn.styled';

export default function Signin() {
  return (
    <SigninContainer>
      <SigninImg />
      <SigninForm />
    </SigninContainer>
  );
}
