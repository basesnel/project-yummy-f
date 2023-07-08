import { FooterWraper } from './Footer.styled';
import { Navigation } from './Navigation/Navigation';

export function Footer() {
  return (
    <FooterWraper>
      <Navigation />
      <div>© 2023 All Rights Reserved.</div>
    </FooterWraper>
  );
}
