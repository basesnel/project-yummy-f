import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import API from 'api';
import { RecipeForm, SubmitButton } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';

const AddRecipeForm = () => {
  const [categories, setCategories] = useState([]);
  const [picture, setPicture] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setCategories(await API.fetchCategories());
      } catch (error) {
        console.log(error);
      }
    };

    const getIngredients = async () => {
      try {
        setIngredients(await API.getIngredients());
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
    getIngredients();
  }, []);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients: [{ ingredient: '', amount: '' }],
        preparation: '',
      }}
      onSubmit={values => {
        console.log(picture);
        if (typeof values.preparation === 'string') {
          values.preparation = values.preparation.split(/\r?\n/);
        }
        const formData = new FormData();
        formData.append('picture', picture);

        for (const key in values) {
          formData.append(key, values[key]);
          console.log(key, values[key]);
        }

        alert(JSON.stringify(values, null, 2));
        for (let pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
      }}
    >
      {({ handleSubmit }) => (
        <RecipeForm onSubmit={handleSubmit}>
          <RecipeDescriptionFields
            categories={categories}
            setPicture={setPicture}
          />
          <RecipeIngredientsFields ingredients={ingredients} />
          <RecipePreparationFields />
          <SubmitButton type="submit">Add</SubmitButton>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
