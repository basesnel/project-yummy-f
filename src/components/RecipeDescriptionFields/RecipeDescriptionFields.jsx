import { useRef, useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';

import { fetchCategories } from 'redux/recipies/operations';
import CustomValueContainer from './CustomValueContainer';
import blank from '../../assets/images/addRecipe/blank.png';
import { timeOptions } from 'utils/selectors';
import { useRecipies } from 'hooks';
import {
  SectionContainer,
  ImageHolder,
  ImagePlaceholder,
  FileInput,
  InputsContainer,
  InputField,
  StyledSelect,
  InputErrorHandle,
  ErrorField,
} from './RecipeDescriptionFields.styled';
import { useTheme } from '@mui/material';
import IngradientsMUI from 'components/RecipeIngredientsFields/IngradientsMUI';

const RecipeDescriptionFields = ({ setPicture, errors, touched }) => {
  const dispatch = useDispatch();

  const { values, handleChange } = useFormikContext();
  const [imagePreview, setImagePreview] = useState(blank);

  const { categories } = useRecipies();

  useEffect(() => {
    !categories && dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = ({ target }) => {
    const selectedFile = target.files[0];
    const imagePreviewURL = URL.createObjectURL(selectedFile);
    setImagePreview(imagePreviewURL);
    setPicture(target.files[0]);
  };

  const categoriesOptions = (categories || []).map(category => {
    return { value: category.toLowerCase(), label: category };
  });

  const theme = useTheme();

  return (
    <IngradientsMUI>
      <SectionContainer>
        <ImageHolder>
          <ImagePlaceholder
            src={imagePreview}
            alt="recipe placeholder"
            onClick={handleClick}
          />
          <FileInput
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            ref={fileInputRef}
            onChange={uploadImage}
          />
        </ImageHolder>

        <InputsContainer>
          <InputErrorHandle>
            <InputField
              style={{ color: theme.palette.text.primary }}
              type="text"
              id="title"
              name="title"
              placeholder="Enter item title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && touched.title ? (
              <ErrorField>{errors.title}</ErrorField>
            ) : null}
          </InputErrorHandle>
          <InputErrorHandle>
            <InputField
              style={{ color: theme.palette.text.primary }}
              type="text"
              id="description"
              name="description"
              placeholder="Enter about recipe"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && touched.description ? (
              <ErrorField>{errors.description}</ErrorField>
            ) : null}
          </InputErrorHandle>
          <InputErrorHandle>
            <StyledSelect
              style={{ color: theme.palette.text.primary }}
              isSearchable={false}
              classNamePrefix="Select"
              options={categoriesOptions}
              placeholder="Category"
              onChange={e => (values.category = e.value)}
              menuShouldBlockScroll={true}
              components={{
                ValueContainer: CustomValueContainer,
              }}
            />
            {errors.category && touched.category && values.category === '' ? (
              <ErrorField>{errors.category}</ErrorField>
            ) : null}
          </InputErrorHandle>

          <InputErrorHandle>
            <StyledSelect
              style={{ color: theme.palette.text.primary }}
              isSearchable={false}
              classNamePrefix="Select"
              options={timeOptions}
              placeholder="Cooking time"
              onChange={e => (values.time = e.value)}
              components={{
                ValueContainer: CustomValueContainer,
              }}
            />
            {errors.time && touched.time && values.time === '' ? (
              <ErrorField>{errors.time}</ErrorField>
            ) : null}
          </InputErrorHandle>
        </InputsContainer>
      </SectionContainer>
    </IngradientsMUI>
  );
};

export default RecipeDescriptionFields;
