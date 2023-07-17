import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const PageHeader = styled.h1`
  /* color: #001833; */
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.56px;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;
