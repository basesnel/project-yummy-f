import { styled } from 'styled-components';
import { SIZE, COLOR } from 'constants';

export const HeaderContainer = styled.header`
    display: flex;
    margin-top: 18px;

    @media screen and (min-width: ${SIZE.desktop}) {
        position: absolute;
        margin-top: 18px;
        width: 1240px;
    }
`;

export const Burger = styled.img`
    width: 28px;
    height: 28px;

    &:hover,
    &:focus {
        fill: inherit;
    }

    @media screen and (min-width: ${SIZE.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const BurgerBtn = styled.button`
    background-color: transparent;
    border: none;
    margin: 9px 0;

    width: 28px;
    height: 28px;

    &:hover,
    &:focus {
        color: ${COLOR.hover};
    }

    @media screen and (min-width: ${SIZE.tablet}) {
        width: 32px;
        height: 32px;
    }
`;
