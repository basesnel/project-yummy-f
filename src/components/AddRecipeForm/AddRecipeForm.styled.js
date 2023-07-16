import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const RecipeForm = styled.form`
  margin-top: 72px;
  margin-bottom: 72px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-bottom: 200px;
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
`;
