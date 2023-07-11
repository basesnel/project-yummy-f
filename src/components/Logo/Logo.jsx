// import { ReactComponent as LogoIconBig } from 'assets/images/header/logo_desktop_tablet.svg';
import { StyledLinkLogo, WrapperLogo } from './Logo.styled';

const Logo = () => {
    return (
        <StyledLinkLogo to="/main">
            <WrapperLogo />
        </StyledLinkLogo>
    );
};

export default Logo;
