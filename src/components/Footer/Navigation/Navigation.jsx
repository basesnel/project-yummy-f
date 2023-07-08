import { FollowUs } from '../../FollowUs/FollowUs';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';

import {
  NavLogo,
  NavigationContainer,
  NavigationWrapper,
} from './Navigation.styled';
import { Container } from 'components/Container/Container';

export function Navigation() {
  return (
    <NavigationWrapper>
      <Container>
        <NavigationContainer>
          <div>
            <NavLogo />
            <h3>So Yummy</h3>
          </div>
          <Nav />
          <SubscribeForm />
          <FollowUs hoverColor="#FFFFFF" />
        </NavigationContainer>
      </Container>
    </NavigationWrapper>
  );
}
