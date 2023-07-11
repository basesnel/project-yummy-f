import { styled } from 'styled-components';
import { SIZE } from 'constants';
import { ReactComponent as LogoHeader } from 'assets/images/header/logoHeader.svg';
import { NavLink } from 'react-router-dom';

export const WrapperLogo = styled(LogoHeader)`
    width: 100%;
    height: 100%;
`;

export const StyledLinkLogo = styled(NavLink)`
    @media screen and (min-width: ${SIZE.mobile}) {
        width: 40px;
        height: 40px;
    }

    @media screen and (min-width: ${SIZE.tablet}) {
        width: 44px;
        height: 44px;
    }
`;
