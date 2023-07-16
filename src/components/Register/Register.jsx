import RegisterForm from 'components/Register/RegisterForm/RegisterForm';
import AuthImg from 'components/AuthContainer/AuthImg';
import AuthContainer from 'components/AuthContainer/AuthContainer';

export default function Register() {
  return (
    <AuthContainer>
      <AuthImg />
      <RegisterForm />
    </AuthContainer>
  );
}
