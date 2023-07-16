import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegistrationLink from '../RegistrationLink/RegistrationLink';
import {
  Box,
  FormSignin,
  IconWrapper,
  SigninButton,
  SigninInput,
  SigninInputWrapper,
  SigninLabel,
  Warning,
} from './SigninForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';
import { login } from 'redux/auth/operations';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SigninForm() {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  let updateStorages = storageValue => {
    localStorage.setItem('last-session-value', storageValue);
    sessionStorage.setItem('current-session', storageValue);
  };

  let getSessionCount = () => {
    let lastSessionValue = localStorage.getItem('last-session-value');

    let registerValue = localStorage.getItem('visitCount');
    if (lastSessionValue === null) {
      updateStorages(Number(registerValue));
    } else if (
      lastSessionValue &&
      sessionStorage.getItem('current-session') === null
    ) {
      lastSessionValue++;
      updateStorages(lastSessionValue);
    }
    let sessionValue = parseInt(lastSessionValue);
    return console.log(sessionValue);
  };

  getSessionCount();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
  });

  const notifyError = msg => {
    toast.error(msg, {
      toastId: 'idError',
    });
  };

  return (
    <Box>
      {authError && notifyError(authError)}
      <FormSignin onSubmit={formik.handleSubmit}>
        <SigninLabel>Sign In</SigninLabel>

        <SigninInputWrapper>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>

          <SigninInput
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.submitCount > 0 && formik.errors.email && 'input__error'
            }
          />
          {formik.submitCount > 0 && formik.errors.email && (
            <Warning>{formik.errors.email}</Warning>
          )}
        </SigninInputWrapper>
        <SigninInputWrapper>
          <IconWrapper>
            <LockIcon />
          </IconWrapper>

          <SigninInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.submitCount > 0 && formik.errors.password && 'input__error'
            }
          />
          {formik.submitCount > 0 && formik.errors.password && (
            <Warning>{formik.errors.password}</Warning>
          )}
        </SigninInputWrapper>
        <SigninButton type="submit">Sign In</SigninButton>
      </FormSignin>
      <RegistrationLink />
      <ToastContainer autoClose={false} />
    </Box>
  );
}
