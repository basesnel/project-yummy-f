import { styled } from 'styled-components';
import { ReactComponent as LogoIconBig } from 'assets/images/header/logo_desktop_tablet.svg';

export const WrapperLogo = styled(LogoIconBig)`
  @media screen and (min-width: 375px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
