import { styled } from 'styled-components';

import { SIZE } from 'constants';

export const RecipeForm = styled.form`
  margin-bottom: 72px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 100px;
  }
`;

export const SubmitButton = styled.button`
  width: 129px;
  height: 46px;
  background-color: #22252a;
  border-color: transparent;
  color: #fafafa;
  border-radius: 24px 44px;
  font-size: 16px;

  &:disabled {
    color: #23262a;
    background-color: #d9d9d9;
    cursor: wait;
  }
`;
