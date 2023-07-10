import * as yup from 'yup';
import { useFormik } from 'formik';
import SigninLink from '../SigninLink/SigninLink';
import {
  Box,
  FormRegister,
  IconWrapper,
  RegisterButton,
  RegisterInput,
  RegisterInputWrapper,
  RegisterLabel,
  Warning,
} from './RegisterForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';
import { ReactComponent as ManIcon } from '../../../assets/images/signin/man-03.svg';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <Box>
      <FormRegister onSubmit={formik.handleSubmit}>
        <RegisterLabel>Registation</RegisterLabel>

        <RegisterInputWrapper>
          <IconWrapper>
            <ManIcon />
          </IconWrapper>

          <RegisterInput
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.name && 'input__error'}
          />
          {formik.submitCount > 0 && formik.errors.name && (
            <Warning>{formik.errors.name}</Warning>
          )}
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>

          <RegisterInput
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.email && 'input__error'}
          />
          {formik.submitCount > 0 && formik.errors.email && (
            <Warning>{formik.errors.email}</Warning>
          )}
        </RegisterInputWrapper>

        <RegisterInputWrapper>
          <IconWrapper>
            <LockIcon />
          </IconWrapper>

          <RegisterInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.password && 'input__error'}
          />
          {formik.submitCount > 0 && formik.errors.password && (
            <Warning>{formik.errors.password}</Warning>
          )}
        </RegisterInputWrapper>
        <RegisterButton type="submit">Sign Up</RegisterButton>
      </FormRegister>
      <SigninLink />
    </Box>
  );
}
