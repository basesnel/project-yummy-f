import { SIZE } from 'constants';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 40px;
    gap: 32px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    margin-top: 90px;
    gap: 14px;
  }
`;
