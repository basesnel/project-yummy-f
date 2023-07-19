import * as Yup from 'yup';

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required('Enter title*'),
  description: Yup.string().required('Enter description*'),
  category: Yup.string().required('Choose category*'),
  time: Yup.string().required('Choose preparation time*'),
  ingredients: Yup.array().of(
    Yup.object()
      .shape({
        ingredient: Yup.string().required('Choose ingredient*'),
        amount: Yup.string().required('Enter amount*'),
      })
      .nullable()
  ),
  instructions: Yup.string().required('Enter preparation*'),
});

export default RecipeSchema;
