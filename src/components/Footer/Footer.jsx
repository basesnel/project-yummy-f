import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { CopyrightContainer, FooterWraper } from './Footer.styled';
import { Navigation } from './Navigation/Navigation';

export function Footer() {
  return (
    <ThemeWrap>
      <FooterWraper>
        <Navigation />
        <CopyrightContainer>
          <p>© 2023 All Rights Reserved.</p>
          <p>Terms of Service</p>
        </CopyrightContainer>
      </FooterWraper>
    </ThemeWrap>
  );
}
