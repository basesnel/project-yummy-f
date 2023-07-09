import SigninForm from './SigninForm';
import SigninImg from './SigninImg';
import { SigninContainer } from './SigninPage.styled';

export default function SigninPage() {
  return (
    <section>
      <SigninContainer>
        <SigninImg />
        <SigninForm />
      </SigninContainer>
    </section>
  );
}
