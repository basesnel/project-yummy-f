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
import { useTheme } from '@mui/material';
import { COLOR } from 'constants';

export function Navigation() {
  const theme = useTheme();
  return (
    <NavigationWrapper
      style={{
        backgroundColor: theme.palette.background.header,
        color: COLOR.second,
      }}
    >
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
            <SubscribeForm
              style={{
                color: COLOR.second,
              }}
            />
          </div>
          <FollowUs
            hoverColor={theme.palette.iconHeaderHover}
            colorIcon={theme.palette.iconHeader}
          />
        </NavigationContainer>
      </Container>
    </NavigationWrapper>
  );
}
