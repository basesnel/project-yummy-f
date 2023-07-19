import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  EmailIcon,
  SubscribeFormComponent,
  SubscribeFormDescrBox,
} from './SubscribeForm.styled';
import { userSubscribe } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useRef } from 'react';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

export function SubscribeForm() {
  const dispatch = useDispatch();

  const { authError, showSubscribeMessage } = useAuth();

  const firstMessage = useRef(true);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      firstMessage.current = true;
      dispatch(userSubscribe(values));
      resetForm();
    },
  });

  function notify(msg) {
    firstMessage.current = false;
    toast.success(msg, {
      toastId: 'idEmailVerify',
      autoClose: 3000,
    });
  }

  function notifyError(msg) {
    firstMessage.current = false;
    toast.error(msg, {
      toastId: 'idError',
      autoClose: 3000,
    });
  }

  return (
    <>
      {authError && firstMessage.current && notifyError(authError)}
      {showSubscribeMessage &&
        firstMessage.current &&
        notify('You have successfully subscribed')}
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
    </>
  );
}
