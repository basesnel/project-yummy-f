import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import SigninImg from 'components/SignIn/SigninImg';
import { RegisterContainer } from 'components/Register/Register.styled';

export default function Register() {
  return (
    <RegisterContainer>
      <SigninImg />
      <RegisterForm />
    </RegisterContainer>
  );
}