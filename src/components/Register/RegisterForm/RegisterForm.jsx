import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SigninLink from '../SigninLink/SigninLink';
import {
  Box,
  FormRegister,
  IconWrapper,
  RegisterButton,
  RegisterInput,
  RegisterInputWrapper,
  RegisterButtonWrapper,
  RegisterLabel,
  Warning,
} from './RegisterForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';
import { ReactComponent as ManIcon } from '../../../assets/images/signin/man-03.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/images/signin/error.svg';
import { ReactComponent as ValidIcon } from '../../../assets/images/signin/iconvalid.svg';
import { register } from 'redux/auth/operations';

import { mailRegexp } from 'constants';
import {
  ValidMessage,
  ValidationIcon,
} from 'components/SignIn/SigninForm/SigninForm.styled';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .matches(mailRegexp, 'Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { isVerify, authError } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      dispatch(register(values));
      resetForm();
    },
  });

  const notify = msg => {
    toast.success(msg, {
      toastId: 'idEmailVerify',
    });
  };

  const notifyError = msg => {
    toast.error(msg, {
      toastId: 'idError',
    });
  };
  const handleClearEmail = () => {
    formik.setFieldValue('email', '');
  };
  const handleClearPassword = () => {
    formik.setFieldValue('password', '');
  };
  const handleClearName = () => {
    formik.setFieldValue('name', '');
  };
  return (
    <Box>
      {isVerify && notify('Check your email to verify your profile')}
      {authError && notifyError(authError)}
      <FormRegister onSubmit={formik.handleSubmit}>
        <RegisterLabel>Registation</RegisterLabel>

        <RegisterInputWrapper
          className={
            formik.submitCount > 0 && formik.errors.name
              ? 'input__error'
              : formik.touched.email && !formik.errors.name
              ? 'input__valid'
              : ''
          }
        >
          <IconWrapper>
            <ManIcon />
          </IconWrapper>

          <RegisterInput
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.submitCount > 0 && formik.errors.name ? (
            <>
              <Warning>{formik.errors.name}</Warning>
              <ValidationIcon onClick={handleClearName}>
                <ErrorIcon />
              </ValidationIcon>
            </>
          ) : formik.touched.name && !formik.errors.name ? (
            <>
              <ValidationIcon>
                <ValidIcon />
              </ValidationIcon>
            </>
          ) : null}
        </RegisterInputWrapper>

        <RegisterInputWrapper
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

          <RegisterInput
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
        </RegisterInputWrapper>

        <RegisterInputWrapper
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

          <RegisterInput
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
        </RegisterInputWrapper>
        <RegisterButtonWrapper>
          <RegisterButton type="submit">Sign Up</RegisterButton>
        </RegisterButtonWrapper>
      </FormRegister>
      <SigninLink />
      <ToastContainer autoClose={false} />
    </Box>
  );
}
