import {
  Container,
  Logo,
  Title,
  Text,
  BtnContainer,
  BtnText,
} from './WelcomePage.styled';
import SkewButton from 'components/SkewButton/SkewButton';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <Container>
      <Logo
        src={require('../../assets/images/welcome/logo.svg').default}
        alt="logo"
      />
      <Title>Welcome to the app!</Title>
      <Text>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Text>
      <BtnContainer>
        <SkewButton paddingH={22} paddingW={44}>
          <BtnText to="/registration">Registration</BtnText>
        </SkewButton>
        <SkewButton bgColor={'transparent'} paddingH={22} paddingW={44}>
          <BtnText to="/signin">Sign In</BtnText>
        </SkewButton>
      </BtnContainer>
    </Container>
  );
}
