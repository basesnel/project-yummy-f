import VerifyFeedback from 'components/Verification/VerifyFeedback/VerifyFeedback';
import AuthImg from 'components/AuthContainer/AuthImg';
import AuthContainer from 'components/AuthContainer/AuthContainer';

export default function Verification() {
  return (
    <AuthContainer>
      <AuthImg />
      <VerifyFeedback />
    </AuthContainer>
  );
}
