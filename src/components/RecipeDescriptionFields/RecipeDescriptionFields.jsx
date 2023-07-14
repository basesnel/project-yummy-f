import Select from 'react-select';
import { useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import blank from '../../assets/images/addRecipe/blank.png';
import { timeOptions } from 'utils/selectors';
import {
  SectionContainer,
  ImageHolder,
  ImagePlaceholder,
  FileInput,
  InputsContainer,
  InputField,
} from './RecipeDescriptionFields.styled';
import { COLOR } from 'constants';

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
        <Select
          options={categoriesOptions}
          placeholder="Category"
          onChange={e => (values.category = e.value)}
          noOptionsMessage={() => 'No category found'}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            dropdownIndicator: () => ({
              color: `${COLOR.main}`,
            }),
            control: baseStyles => ({
              ...baseStyles,
              boxShadow: 'none',
              border: '0',
              borderRadius: '0',
              borderBottom: '1px solid #E0E0E0',
              height: '36px',
              marginBottom: '32px',
            }),
            valueContainer: () => ({
              padding: '0',
            }),
            indicatorsContainer: baseStyles => ({
              ...baseStyles,
              alignItems: 'top',
            }),
          }}
        />
        <Select
          options={timeOptions}
          placeholder="Cooking time"
          onChange={e => (values.time = e.value)}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={{
            dropdownIndicator: () => ({
              color: `${COLOR.main}`,
            }),
            control: baseStyles => ({
              ...baseStyles,
              boxShadow: 'none',
              border: '0',
              borderRadius: '0',
              borderBottom: '1px solid #E0E0E0',
              height: '36px',
            }),
            valueContainer: () => ({
              padding: '0',
            }),
            indicatorsContainer: baseStyles => ({
              ...baseStyles,
              alignItems: 'top',
            }),
          }}
        />
      </InputsContainer>
    </SectionContainer>
  );
};

export default RecipeDescriptionFields;
