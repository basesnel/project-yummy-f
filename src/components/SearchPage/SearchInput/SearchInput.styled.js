import { TRANSITION } from 'constants';
import { SIZE } from 'constants';
import { COLOR } from 'constants';
import styled from 'styled-components';
export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 15.7px 31.72px;

  border: none;
  border-radius: 24px 44px;
  background-color: ${COLOR.main};
  color: ${COLOR.second};
  font-size: 14px;

  transition: ${TRANSITION.forHoverBgColor};

  &:hover,
  &:focus {
    background-color: ${COLOR.dark};
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 18px 52px;
    font-size: 16px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 23px 52px;
  }
`;
