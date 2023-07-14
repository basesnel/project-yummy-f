import { useFormikContext } from 'formik';

import {
  SectionContainer,
  SectionTitle,
  TextFields,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = () => {
  const { values, handleChange, handleBlur } = useFormikContext();

  return (
    <SectionContainer>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <TextFields
        name="preparation"
        placeholder="Enter recipe"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.preparation}
      ></TextFields>
    </SectionContainer>
  );
};

export default RecipePreparationFields;
