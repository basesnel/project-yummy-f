import { useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import {
  SectionContainer,
  SectionTitle,
  Title,
  CounterContainer,
  MinusButton,
  PlusButton,
} from './RecipeIngredientsFields.styled';

const RecipeIngredientsFields = () => {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

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
                stroke-opacity="0.3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 2.1875V11.8125"
                stroke="#8BAA36"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </PlusButton>
        </CounterContainer>
      </SectionTitle>
    </SectionContainer>
  );
};

export default RecipeIngredientsFields;
