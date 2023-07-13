import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import API from 'api';
import { RecipeForm } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';

const AddRecipeForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setCategories(await API.fetchCategories());
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <Formik
      initialValues={{ preparation: '' }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleSubmit }) => (
        <RecipeForm onSubmit={handleSubmit}>
          <RecipeDescriptionFields categories={categories} />
          <RecipeIngredientsFields />
          <RecipePreparationFields />
          <button type="submit">Submit</button>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
