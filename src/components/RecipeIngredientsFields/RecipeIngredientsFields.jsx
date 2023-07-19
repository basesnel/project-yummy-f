import { useState } from 'react';
import { useFormikContext, FieldArray, ErrorMessage } from 'formik';

import { useRecipies } from 'hooks';
import {
  SectionContainer,
  SectionTitle,
  Title,
  CounterContainer,
  MinusButton,
  PlusButton,
  FieldsContainer,
  InputRaw,
  InputsContainer,
  SelectField,
  InputField,
  ButtonRemove,
  IngredientError,
  AmountError,
} from './RecipeIngredientsFields.styled';

const RecipeIngredientsFields = () => {
  const { values, handleChange, setFieldValue } = useFormikContext();
  const [counter, setCounter] = useState(1);

  const { ingredients } = useRecipies();

  const increaseCounter = () => {
    values.ingredients.push({ ingredient: '', measure: '' });
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      values.ingredients.pop();
      setCounter(counter - 1);
    }
  };

  const ingredientsOptions = ingredients.map(ingredient => {
    return { value: ingredient._id, label: ingredient.name };
  });

  return (
    <SectionContainer>
      <SectionTitle>
        <Title>Ingredients</Title>
        <CounterContainer>
          <MinusButton type="button" onClick={decreaseCounter}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 7H11.8125"
                stroke="rgb(51, 51, 51)"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MinusButton>
          {counter}
          <PlusButton type="button" onClick={increaseCounter}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 7H11.8125"
                stroke="#8BAA36"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 2.1875V11.8125"
                stroke="#8BAA36"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PlusButton>
        </CounterContainer>
      </SectionTitle>

      <FieldArray
        name="ingredients"
        render={({ remove }) => (
          <FieldsContainer>
            {values.ingredients.length > 0 &&
              values.ingredients.map((ingredient, index) => (
                <InputRaw key={index}>
                  <InputsContainer>
                    <SelectField
                      name={`ingredients[${index}].ingredient`}
                      classNamePrefix="Select"
                      options={ingredientsOptions}
                      placeholder="Ingredient"
                      onChange={e =>
                        setFieldValue(
                          `ingredients[${index}].ingredient`,
                          e.value
                        )
                      }
                    />
                    <IngredientError>
                      <ErrorMessage name={`ingredients[${index}].ingredient`} />
                    </IngredientError>
                    <InputField
                      name={`ingredients[${index}].measure`}
                      value={ingredient.measure}
                      placeholder="1 tbs"
                      type="text"
                      onChange={handleChange}
                    />
                    <AmountError>
                      <ErrorMessage name={`ingredients[${index}].measure`} />
                    </AmountError>
                  </InputsContainer>
                  <ButtonRemove
                    type="button"
                    className="secondary"
                    onClick={() => {
                      remove(index);
                      setCounter(counter - 1);
                    }}
                  >
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0625 4.4375L3.9375 14.5625"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0625 14.5625L3.9375 4.4375"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonRemove>
                </InputRaw>
              ))}
          </FieldsContainer>
        )}
      />
    </SectionContainer>
  );
};

export default RecipeIngredientsFields;
