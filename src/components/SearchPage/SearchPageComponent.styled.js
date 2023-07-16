import { SIZE } from 'constants';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    margin-bottom: 50px;
  }
`;
