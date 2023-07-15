import VerifyFeedback from 'components/Verification/VerifyFeedback/VerifyFeedback';
import SigninImg from 'components/Verification/VerificationImg';
import { SigninContainer } from 'components/Verification/Verification.styled';

export default function Verification() {
  return (
    <SigninContainer>
      <SigninImg />
      <VerifyFeedback />
    </SigninContainer>
  );
}
