import * as Yup from 'yup';

const RecipeSchema = Yup.object().shape({
  title: Yup.string().required('Enter title*'),
  description: Yup.string().required('Enter description*'),
  category: Yup.string().required('Choose category*'),
  time: Yup.string().required('Choose preparation time*'),
  ingredients: Yup.array().of(
    Yup.object()
      .shape({
        id: Yup.string().required('Choose ingredient*'),
        measure: Yup.string().required('Enter measure*'),
      })
      .nullable()
  ),
  instructions: Yup.string().required('Enter preparation instructions*'),
});

export default RecipeSchema;
