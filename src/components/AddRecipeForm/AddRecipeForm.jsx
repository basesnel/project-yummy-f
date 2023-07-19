import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import API from 'api';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import RecipeSchema from 'pages/AddRecipePage/RecipeValidationSchema';

import { RecipeForm, SubmitButton } from './AddRecipeForm.styled';

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
        instructions: '',
      }}
      validationSchema={RecipeSchema}
      onSubmit={values => {
        const formData = new FormData();
        formData.append('picture', picture);

        for (const key in values) {
          if (key === 'ingredients') {
            values[key].forEach((item, index) => {
              formData.append(
                `ingredients[${index}][ingredient]`,
                item.ingredient
              );
              formData.append(`ingredients[${index}][amount]`, item.amount);
            });
          } else if (key === 'instructions') {
            const arr = values[key].split(/\r?\n/).filter(item => item.length);
            arr.forEach((item, index) => {
              formData.append(`instructions[${index}]`, item);
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
            categories={categories}
            setPicture={setPicture}
            errors={errors}
            touched={touched}
          />
          <RecipeIngredientsFields
            ingredients={ingredients}
            errors={errors}
            touched={touched}
          />
          <RecipePreparationFields errors={errors} touched={touched} />
          <SubmitButton type="submit">Add</SubmitButton>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
