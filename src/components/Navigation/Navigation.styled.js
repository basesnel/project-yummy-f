import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    margin-left: 187px;
    padding-top: 10px;
    padding-bottom: 11px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #8baa36;
  }
  &:hover,
  &:focus {
    color: #8baa36;
  }

  @media screen and (min-width: 1200px) {
    
    margin-left: 30px;
    
`;
