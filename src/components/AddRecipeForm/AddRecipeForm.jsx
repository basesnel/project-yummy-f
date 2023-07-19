import { useState } from 'react';
import { Formik } from 'formik';

import API from 'api';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import RecipeSchema from 'pages/AddRecipePage/RecipeValidationSchema';

import { RecipeForm, SubmitButton } from './AddRecipeForm.styled';

const AddRecipeForm = () => {
  const [picture, setPicture] = useState(null);

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients: [{ ingredient: '', measure: '' }],
        instructions: '',
      }}
      validationSchema={RecipeSchema}
      onSubmit={values => {
        const formData = new FormData();
        formData.append('preview', picture);

        for (const key in values) {
          if (key === 'ingredients') {
            values[key].forEach(item => {
              formData.append(`ingredients[]`, JSON.stringify(item));
            });
          } else if (key === 'instructions') {
            const arr = values[key].split(/\r?\n/).filter(item => item.length);
            arr.forEach(item => {
              formData.append(`instructions[]`, item);
            });
          } else {
            formData.append(key, values[key]);
          }

          console.log(key, values[key]);
        }

        API.addRecipe(formData);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <RecipeForm onSubmit={handleSubmit}>
          <RecipeDescriptionFields
            setPicture={setPicture}
            errors={errors}
            touched={touched}
          />
          <RecipeIngredientsFields errors={errors} touched={touched} />
          <RecipePreparationFields errors={errors} touched={touched} />
          <SubmitButton type="submit">Add</SubmitButton>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
