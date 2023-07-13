import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import { RecipeForm } from './AddRecipeForm.styled';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import API from 'api';

const AddRecipeForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setCategories(await API.fetchCategories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  console.log(categories);

  return (
    <Formik
      initialValues={{ preparation: '' }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleSubmit }) => (
        <RecipeForm onSubmit={handleSubmit}>
          <RecipePreparationFields />
          <button type="submit">Submit</button>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
