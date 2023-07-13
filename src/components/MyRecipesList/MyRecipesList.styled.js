import { SIZE } from 'constants';
import { styled } from 'styled-components';

export const WrapperList = styled.ul`
  margin-top: 50px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 100px;
  }
`;
