import { styled } from 'styled-components';
import { SIZE } from 'constants';
import { ReactComponent as LogoHeader } from 'assets/images/header/logoHeader.svg';

export const WrapperLogo = styled(LogoHeader)`
  @media screen and (min-width: ${SIZE.mobile}) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 44px;
    height: 44px;
  }
`;
