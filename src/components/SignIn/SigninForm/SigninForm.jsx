import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useRef } from 'react';
import { toast } from 'react-toastify';

import RegistrationLink from '../RegistrationLink/RegistrationLink';
import {
  Box,
  FormSignin,
  IconWrapper,
  SigninButton,
  SigninButtonWrapper,
  SigninInput,
  SigninInputWrapper,
  SigninLabel,
  ValidMessage,
  ValidationIcon,
  Warning,
} from './SigninForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/images/signin/error.svg';
import { ReactComponent as ValidIcon } from '../../../assets/images/signin/iconvalid.svg';
import { login } from 'redux/auth/operations';

import { mailRegexp } from 'constants';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .matches(mailRegexp, 'Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SigninForm() {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const firstMessage = useRef(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      firstMessage.current = true;
      dispatch(login(values))
        .unwrap()
        .then(originalPromiseResult => {
          resetForm();
        })
        .catch(rejectedValueOrSerializedError => {});
    },
  });

  function notifyError(msg) {
    firstMessage.current = false;
    toast.error(msg, {
      toastId: 'idError',
      autoClose: 3000,
    });
  }

  const handleClearEmail = () => {
    formik.setFieldValue('email', '');
  };
  const handleClearPassword = () => {
    formik.setFieldValue('password', '');
  };
  return (
    <Box>
      {authError && firstMessage.current && notifyError(authError)}
      <FormSignin onSubmit={formik.handleSubmit}>
        <SigninLabel>Sign In</SigninLabel>

        <SigninInputWrapper
          className={
            formik.submitCount > 0 && formik.errors.email
              ? 'input__error'
              : formik.touched.email && !formik.errors.email
              ? 'input__valid'
              : ''
          }
        >
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>

          <SigninInput
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.submitCount > 0 && formik.errors.email ? (
            <>
              <Warning>{formik.errors.email}</Warning>
              <ValidationIcon onClick={handleClearEmail}>
                <ErrorIcon />
              </ValidationIcon>
            </>
          ) : formik.touched.email && !formik.errors.email ? (
            <>
              <ValidationIcon>
                <ValidIcon />
              </ValidationIcon>
            </>
          ) : null}
        </SigninInputWrapper>
        <SigninInputWrapper
          className={
            formik.submitCount > 0 && formik.errors.password
              ? 'input__error'
              : formik.touched.password && !formik.errors.password
              ? 'input__valid'
              : ''
          }
        >
          <IconWrapper>
            <LockIcon />
          </IconWrapper>

          <SigninInput
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.submitCount > 0 && formik.errors.password ? (
            <>
              <Warning>{formik.errors.password}</Warning>
              <ValidationIcon onClick={handleClearPassword}>
                <ErrorIcon />
              </ValidationIcon>
            </>
          ) : formik.touched.password && !formik.errors.password ? (
            <>
              <ValidMessage>Password is secure</ValidMessage>
              <ValidationIcon>
                <ValidIcon />
              </ValidationIcon>
            </>
          ) : null}
        </SigninInputWrapper>
        <SigninButtonWrapper>
          <SigninButton type="submit">Sign In</SigninButton>
        </SigninButtonWrapper>
      </FormSignin>
      <RegistrationLink />
    </Box>
  );
}
