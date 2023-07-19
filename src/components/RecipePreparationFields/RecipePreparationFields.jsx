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
        name="preparation"
        placeholder="Enter recipe"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.preparation}
      ></Textarea>
      <TextError>
        <ErrorMessage name={'preparation'} />
      </TextError>
      {/* {errors.preparation && touched.preparation && (
        <TextError>{errors.preparation}</TextError>
      )} */}
    </SectionContainer>
  );
};

export default RecipePreparationFields;
