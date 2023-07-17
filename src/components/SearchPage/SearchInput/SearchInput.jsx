import { SearchForm } from 'components/Search/Search.styled';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Message } from 'components/UserProfile/UserProfile.styled';
import { SearchBtn } from './SearchInput.styled';

const validationSchema = Yup.object().shape({
  query: Yup.string().required('Please enter your query').trim(),
});

export const SearchInput = ({
  ver,
  setQuery,

  query,
  setSearchParams,
}) => {
  const handleChange = e => {
    const { value } = e.target;
    formik.setFieldValue('query', value);
    setSearchParams({ q: value });
    setQuery(value.trim());
  };

  const formik = useFormik({
    initialValues: {
      query: query ?? '',
    },

    validationSchema,
    onSubmit: () => {
      setQuery(query);
    },
  });
  const handleSubmit = e => {
    e.preventDefault();

    formik.handleSubmit();
  };

  return (
    <SearchForm $ver={ver} onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={formik.values.query}
        onChange={handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.query && formik.errors.query ? (
        <Message style={{ fontSize: '14px', left: '30px', bottom: '-20px' }}>
          {formik.errors.query}
        </Message>
      ) : null}
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
