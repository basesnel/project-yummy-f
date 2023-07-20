import ButtonMUI from 'components/Search/ButtonMui';
import InputMUI from 'components/Search/InputMUI';
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

export const SearchInput = ({
  ver,
  getCards,
  setRecipieArr,
  page,
  cardsPerPage,
  setPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? null);

  const handleChange = e => {
    const { value } = e.target;
    formik.setFieldValue('query', value);
    setSearchParams({ q: value });
    setQuery(value.trim());
  };

  useEffect(() => {
    if (query) {
      getCards(query);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, cardsPerPage]);

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
      setPage(1);
      formik.handleSubmit();
    } else {
      setRecipieArr(null);
    }
  };

  return (
    <SearchForm $ver={ver} onSubmit={handleSubmit} autoComplete="off">
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
