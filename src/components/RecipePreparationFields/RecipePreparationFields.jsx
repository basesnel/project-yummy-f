import { useFormikContext, ErrorMessage } from 'formik';

import {
  SectionContainer,
  SectionTitle,
  Textarea,
  TextError,
} from './RecipePreparationFields.styled';
import { useTheme } from '@mui/material';

const RecipePreparationFields = (errors, touched) => {
  const { values, handleChange, handleBlur } = useFormikContext();
  const theme = useTheme();

  return (
    <SectionContainer>
      <SectionTitle>Recipe Preparation</SectionTitle>
      <Textarea
        style={{ color: theme.palette.text.primary }}
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
