import { FollowUs } from '../../FollowUs/FollowUs';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';

import { NavLogo, NavigationContainer } from './Navigation.styled';

export function Navigation() {
  return (
    <NavigationContainer>
      <div>
        <NavLogo />
        <h3>So Yummy</h3>
      </div>
      <Nav />
      <SubscribeForm />
      <FollowUs hoverColor="#FFFFFF" />
    </NavigationContainer>
  );
}
