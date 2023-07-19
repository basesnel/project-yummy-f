import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const WrapperList = styled.ul`
  margin-top: 24px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 32px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-top: 50px;
    padding: 0 40px;
  }
`;
