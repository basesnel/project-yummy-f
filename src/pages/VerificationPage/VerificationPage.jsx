import Verification from 'components/Verification/Verification';
import { Helmet } from 'react-helmet-async';

export default function VerificationPage() {
  return (
    <>
      <Helmet>
        <title>Verification</title>
      </Helmet>
      <Verification />
    </>
  );
}
