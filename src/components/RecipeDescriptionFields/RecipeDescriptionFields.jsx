import { useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import CustomValueContainer from './CustomValueContainer';
import blank from '../../assets/images/addRecipe/blank.png';
import { timeOptions } from 'utils/selectors';
import {
  SectionContainer,
  ImageHolder,
  ImagePlaceholder,
  FileInput,
  InputsContainer,
  InputField,
  StyledSelect,
} from './RecipeDescriptionFields.styled';

const RecipeDescriptionFields = ({ categories, setPicture }) => {
  const { values, handleChange } = useFormikContext();
  const [imagePreview, setImagePreview] = useState(blank);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = ({ target }) => {
    const selectedFile = target.files[0];
    console.log(target.files[0]);
    const imagePreviewURL = URL.createObjectURL(selectedFile);
    setImagePreview(imagePreviewURL);
    setPicture(target.files[0]);
  };

  const categoriesOptions = categories.map(category => {
    return { value: category.toLowerCase(), label: category };
  });

  return (
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
        <InputField
          type="text"
          id="title"
          name="title"
          placeholder="Enter item title"
          value={values.title}
          onChange={handleChange}
        />
        <InputField
          type="text"
          id="description"
          name="description"
          placeholder="Enter about recipe"
          value={values.description}
          onChange={handleChange}
        />
        <StyledSelect
          classNamePrefix="Select"
          options={categoriesOptions}
          isSearchable={false}
          placeholder="Category"
          onChange={e => (values.category = e.value)}
          menuShouldBlockScroll={true}
          components={{
            IndicatorSeparator: () => null,
            ValueContainer: CustomValueContainer,
          }}
        />
        <StyledSelect
          classNamePrefix="Select"
          options={timeOptions}
          isSearchable={false}
          placeholder="Cooking time"
          onChange={e => (values.time = e.value)}
          components={{
            IndicatorSeparator: () => null,
            ValueContainer: CustomValueContainer,
          }}
        />
      </InputsContainer>
    </SectionContainer>
  );
};

export default RecipeDescriptionFields;
