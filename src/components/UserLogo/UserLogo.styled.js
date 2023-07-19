import { styled } from 'styled-components';
import { SIZE, COLOR } from 'constants';
import Popover from '@mui/material/Popover';

export const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    border-radius: 8px;
  }
`;

export const WrapperUserLogo = styled.button`
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover,
  &:focus {
    color: ${COLOR.hover};
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-right: 50px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-right: 0;
  }
`;

export const UserPhoto = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 14px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.p`
  /* color: #22252a; */
  /* color: inherit; */
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.7;
  padding: 11px 0;

  &:hover,
  &:focus {
    color: inherit;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 14px;
  }
`;
