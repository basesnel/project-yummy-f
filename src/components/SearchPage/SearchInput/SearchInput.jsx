import ButtonMUI from 'components/Search/ButtonMui';
import InputMUI from 'components/Search/InputMUI';
import { SearchForm } from 'components/Search/Search.styled';

import { SearchForm } from 'components/Search/Search.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Message } from 'components/UserProfile/UserProfile.styled';
import { SearchBtn } from './SearchInput.styled';
const validationSchema = Yup.object().shape({
  query: Yup.string().required('Please enter your query').trim(),
});

export const SearchInput = ({ ver, getCards, setRecipieArr }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? null);

  const handleChange = e => {
    const { value } = e.target;
    formik.setFieldValue('query', value);
    setSearchParams({ q: value });
    setQuery(value.trim());
  };

  useEffect(() => {
    setTimeout(() => {
      if (query) {
        getCards(query);
      }
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      query: query ?? '',
    },

    validationSchema,
    onSubmit: values => {
      getCards(values.query);
    },
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (query) {
      formik.handleSubmit();
    } else {
      setRecipieArr(null);
    }
  };

  return (
    <SearchForm $ver={ver} onSubmit={handleSubmit}>
      <InputMUI
        type="text"
        name="query"
        value={formik.values.query}
        onChange={handleChange}
        onBlur={formik.handleBlur}
      />
      <ButtonMUI type="submit">Search</ButtonMUI>
      {/* <SearchBtn type="submit">Search</SearchBtn> */}
      {formik.touched.query && formik.errors.query ? (
        <Message style={{ fontSize: '14px', left: '30px', bottom: '-20px' }}>
          {formik.errors.query}
        </Message>
      ) : null}
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
