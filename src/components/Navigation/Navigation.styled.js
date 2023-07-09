import { SIZE } from 'constants';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as SearchHeaderIcon } from 'assets/images/header/searchHeader.svg';

export const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: ${SIZE.desktop}) {
    display: block;
    margin-left: 187px;
    padding-top: 10px;
    padding-bottom: 11px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #23262A;
font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 1.6;


  &.active {
    color: #8baa36;
  }
  &:hover,
  &:focus {
    color: #8baa36;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    
    margin-right: 30px;
    
`;

export const WrapperSearchIcon = styled(SearchHeaderIcon)`
  // display: inline-flex;
  // align-items: center;
  @media screen and (min-width: ${SIZE.mobile}) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 24px;
    height: 24px;
  }
`;
