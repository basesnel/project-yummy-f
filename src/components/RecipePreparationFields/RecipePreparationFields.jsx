import { useFormikContext, ErrorMessage } from 'formik';

import {
  SectionContainer,
  SectionTitle,
  Textarea,
  TextError,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = (errors, touched) => {
  const { values, handleChange, handleBlur } = useFormikContext();

  return (
    <SectionContainer>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <Textarea
        name="instructions"
        placeholder="Enter recipe"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.instructions}
      ></Textarea>
      <TextError>
        <ErrorMessage name={'instructions'} />
      </TextError>
    </SectionContainer>
  );
};

export default RecipePreparationFields;
