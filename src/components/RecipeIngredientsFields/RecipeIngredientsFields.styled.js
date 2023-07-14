import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const SectionContainer = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 100px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #3e4462;
`;
