import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const ContentWrapper = styled.div`
  padding-top: 44px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding-top: 68px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-top: 28px;
    flex-direction: row;
  }
`;
