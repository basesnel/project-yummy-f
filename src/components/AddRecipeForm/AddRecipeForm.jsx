import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import API from 'api';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import RecipeSchema from 'pages/AddRecipePage/RecipeValidationSchema';

import { RecipeForm, SubmitButton } from './AddRecipeForm.styled';
import { useTheme } from '@mui/material';

const AddRecipeForm = () => {
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients: [{ ingredient: '', measure: '', key: nanoid() }],
        instructions: '',
      }}
      validationSchema={RecipeSchema}
      onSubmit={async values => {
        const formData = new FormData();
        formData.append('preview', picture);

        for (const key in values) {
          if (key === 'ingredients') {
            values[key].forEach(item => {
              formData.append(
                `ingredients[]`,
                JSON.stringify({
                  ingredient: item.ingredient,
                  measure: item.measure,
                })
              );
            });
          } else if (key === 'instructions') {
            const arr = values[key].split(/\r?\n/).filter(item => item.length);
            arr.forEach(item => {
              formData.append(`instructions[]`, item);
            });
          } else {
            formData.append(key, values[key]);
          }
        }
        setIsSubmitting(true);

        const response = await API.addRecipe(formData);

        setIsSubmitting(false);

        if (response) {
          navigate('/my');
        }
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <RecipeForm
          style={{ color: theme.palette.text.primary }}
          onSubmit={handleSubmit}
        >
          <RecipeDescriptionFields
            setPicture={setPicture}
            errors={errors}
            touched={touched}
          />
          <RecipeIngredientsFields errors={errors} touched={touched} />
          <RecipePreparationFields errors={errors} touched={touched} />
          <SubmitButton type="submit" disabled={isSubmitting}>
            Add
          </SubmitButton>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
