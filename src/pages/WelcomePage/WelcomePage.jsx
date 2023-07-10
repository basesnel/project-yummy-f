import {
  Container,
  Logo,
  Title,
  Text,
  BtnContainer,
  BtnText,
} from './WelcomePage.styled';
import SkewButton from 'components/SkewButton/SkewButton';

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
        <BtnText to="/register">
          <SkewButton
            paddingHxs={12}
            paddingHmd={22}
            paddingHlg={22}
            paddingWxs={24}
            paddingWmd={44}
            paddingWlg={44}
          >
            Registration
          </SkewButton>
        </BtnText>
        <BtnText to="/signin">
          <SkewButton
            bgColor={'transparent'}
            paddingHxs={12}
            paddingHmd={22}
            paddingHlg={22}
            paddingWxs={24}
            paddingWmd={44}
            paddingWlg={44}
          >
            Sign In
          </SkewButton>
        </BtnText>
      </BtnContainer>
    </Container>
  );
}
