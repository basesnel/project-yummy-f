import { SIZE, COLOR } from 'constants';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as SearchHeaderIcon } from 'assets/images/header/searchHeader.svg';

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (min-width: ${SIZE.tablet}) {
        gap: 40px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
        flex-direction: row;
        gap: 30px;
        margin-left: 187px;
        align-items: center;
    }
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    gap: 8px;
    justify-content: center;
    color: ${COLOR.dark};
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    letter-spacing: -0.36px;
    @media screen and (min-width: ${SIZE.tablet}) {
        font-size: 24px;
        letter-spacing: -0.48px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: 0;
        padding-top: 10px;
        padding-bottom: 11px;
    }

    &.active {
        color: ${COLOR.hover};
    }
    &:hover,
    &:focus {
        color: ${COLOR.hover};
    }
`;

export const WrapperSearchIcon = styled(SearchHeaderIcon)`
    display: flex;
    align-items: center;
    justify-content: center;
    // fill: inherit;

    @media screen and (min-width: ${SIZE.mobile}) {
        width: 20px;
        height: 20px;
    }

    @media screen and (min-width: ${SIZE.tablet}) {
        width: 24px;
        height: 24px;
    }
`;

export const TextContainer = styled.p`
    color: inherit;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    letter-spacing: -0.36px;
    @media screen and (min-width: ${SIZE.tablet}) {
        font-size: 24px;
        letter-spacing: -0.48px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
        display: none;
`;
