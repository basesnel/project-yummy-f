import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 319px;
  }
`;

export const SectionTitle = styled.h2`
  color: #3e4462;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  margin-bottom: 32px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 40px;
  }
`;

export const RecipesContainer = styled.div``;
