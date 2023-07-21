import Register from 'components/Register/Register';
import { Helmet } from 'react-helmet-async';

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Register />
    </>
  );
}
