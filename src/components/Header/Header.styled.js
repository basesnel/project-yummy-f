import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const HeaderContainer = styled.header`
  display: flex;
  margin-top: 18px;
  // position: absolute;
  //   margin-left: auto;
  //   margin-right: auto;
  //   padding-left: 16px;
  //   padding-right: 16px;

  //   @media screen and (min-width: 375px) {
  //     width: 375px;
  //   }

  //   @media screen and (min-width: 768px) {
  //     padding-left: 32px;
  //     padding-right: 32px;
  //     width: 768px;
  //   }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-top: 18px;
    width: auto;
  }
`;
