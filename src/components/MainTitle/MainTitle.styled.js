import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const PageHeader = styled.h1`
    margin-top: 50px;
    font-size: 28px;
    font-weight: 600;

    @media screen and (min-width: ${SIZE.tablet}) {
        margin-top: 72px;
        font-size: 32px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
        margin-top: 100px;
        font-size: 44px;
    }
`;
