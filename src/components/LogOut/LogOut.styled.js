import { TRANSITION } from 'constants';
import { SIZE } from 'constants';
import { COLOR } from 'constants';
import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 100px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 330px;
    padding: 44px 24px;
    border-radius: 30px;
    background: ${COLOR.second};
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);

    p {
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.28;
        letter-spacing: -0.28px;
        @media screen and (min-width: ${SIZE.tablet}) {
            font-size: 18px;
            line-height: 1.33;
            letter-spacing: -0.36px;
        }
    }
    @media screen and (min-width: ${SIZE.tablet}) {
        width: 480px;
        gap: 32px;
        padding: 50px 40px;
    }
    @media screen and (min-width: ${SIZE.desktop}) {
        width: 500px;
        padding: 50px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    button {
        width: 137px;
        height: 49px;
        font-size: 14px;

        font-weight: 400;
        line-height: 1.28px;

        border-radius: 6px;
        @media screen and (min-width: ${SIZE.tablet}) {
            width: 192px;
            height: 59px;
            font-size: 16px;
            line-height: 1.125px;
        }
    }
    @media screen and (min-width: ${SIZE.tablet}) {
        gap: 16px;
    }
`;

export const LogOutBtn = styled.button`
    border: none;
    color: ${COLOR.second};
    background-color: ${COLOR.main};
    transition: ${TRANSITION.forHoverBgColor};
    &:hover,
    &:focus {
        background-color: ${COLOR.dark};
    }
`;

export const CancelBtn = styled.button`
    border: 1px solid transparent;
    color: ${COLOR.dark};
    background-color: #d9d9d9;
    transition: ${TRANSITION.forHoverBgColor}, ${TRANSITION.forHoverBorderColor};
    &:hover,
    &:focus {
        background-color: transparent;
        border-color: ${COLOR.dark};
    }
`;
