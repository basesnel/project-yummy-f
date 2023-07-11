import { MainContainer } from 'components/Container/Container.styled';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { HeaderContainer } from './Header.styled';

const Header = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <Logo />
                <Navigation />
                <UserLogo />

                {/* <ThemeToggler/> */}
            </HeaderContainer>
        </MainContainer>
    );
};

export default Header;
