import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const WrapperUserLogo = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0;

    //   @media screen and (min-width: ${SIZE.mobile}) {
    //     width: 40px;
    //     height: 40px;
    //   }

    //   @media screen and (min-width: ${SIZE.desktop}) {
    //         margin-left: 227px;
    //         display:flex;
    //         align-items:center;
    //          padding-top: 10px;
    //     padding-bottom: 11px;}
`;

export const UserPhoto = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 14px;
`;

export const UserName = styled.p`
    color: #22252a;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 170%;
`;
