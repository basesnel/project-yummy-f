import { MainContainer } from 'components/Container/Container.styled';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { HeaderContainer, Burger, BurgerBtn } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
// import { SIZE } from 'constants';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormControlLabel } from '@mui/material';
import MaterialUISwitch from './MaterialUISwitch';

const Header = ({ onTheme }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const isBurgerShown = useMediaQuery({
    query: `(max-width: 1439px)`,
  });

  const handleBurgerClick = e => {
    setIsModalShown(prev => !prev);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <Logo />
        {!isBurgerShown && !isModalShown && <Navigation />}
        <UserLogo />
        <FormControlLabel
          onChange={onTheme}
          control={<MaterialUISwitch sx={{ ml: 5 }} />}
        />
        {/* <ThemeToggler/> */}
        {isBurgerShown && !isModalShown && (
          <BurgerBtn onClick={handleBurgerClick}>
            <Burger
              src={require('../../assets/images/header/burger.svg').default}
              alt="burger-menu"
            />
          </BurgerBtn>
        )}

        {isModalShown && isBurgerShown && (
          <Modal closeModal={handleBurgerClick} />
        )}
      </HeaderContainer>
    </MainContainer>
  );
};

export default Header;
