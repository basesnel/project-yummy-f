import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  EmailIcon,
  SubscribeFormComponent,
  SubscribeFormDescrBox,
} from './SubscribeForm.styled';
import { userSubscribe } from 'redux/auth/operations';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

export function SubscribeForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(userSubscribe(values));
      resetForm();
    },
  });
  return (
    <SubscribeFormComponent onSubmit={formik.handleSubmit}>
      <SubscribeFormDescrBox>
        <h4>Subscribe to our Newsletter</h4>
        <p>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </SubscribeFormDescrBox>
      <label
        className={
          formik.submitCount > 0 && formik.errors.email ? 'input__error' : ''
        }
      >
        <input
          name="email"
          placeholder="Enter your email address"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.submitCount > 0 && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <EmailIcon />
      </label>
      <button type="submit">Subscribe</button>
    </SubscribeFormComponent>
  );
}
