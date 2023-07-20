import { FollowUs } from '../../FollowUs/FollowUs';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { Container } from 'components/Container/Container';

import { Link } from 'react-router-dom';

import {
  FooterTabletWrapper,
  FooterTitleContainer,
  NavLogo,
  NavigationContainer,
  NavigationWrapper,
} from './Navigation.styled';

export function Navigation() {
  return (
    <NavigationWrapper>
      <Container>
        <NavigationContainer>
          <div>
            <FooterTabletWrapper>
              <FooterTitleContainer>
                <div>
                  <Link to="/main">
                    <NavLogo />
                  </Link>

                  <h3>So Yummy</h3>
                </div>
                <ul>
                  <li>Database of recipes that can be replenished</li>
                  <li>Flexible search for desired and unwanted ingredients</li>
                  <li>Ability to add your own recipes with photos</li>
                  <li>Convenient and easy to use</li>
                </ul>
              </FooterTitleContainer>
              <Nav />
            </FooterTabletWrapper>
            <SubscribeForm />
          </div>
          <FollowUs hoverColor="#FFFFFF" />
        </NavigationContainer>
      </Container>
    </NavigationWrapper>
  );
}
