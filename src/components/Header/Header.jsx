import { MainContainer } from 'components/Container/Container.styled';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { HeaderContainer, BurgerBtn } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
// import { SIZE } from 'constants';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormControlLabel, ThemeProvider, useTheme } from '@mui/material';
import MaterialUISwitch from './MaterialUISwitch';
import ThemeWrap from 'components/SharedLayout/SharedLayoutStyled';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import THEME from 'theme';

const Header = ({ onTheme }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const theme = useTheme();

  const isBurgerShown = useMediaQuery({
    query: `(max-width: 1439px)`,
  });

  const handleBurgerClick = e => {
    setIsModalShown(prev => !prev);
  };

  const [isPage, setIsPage] = useState(
    useLocation()?.pathname?.split('/')[1] === 'recipe'
  );
  const page = useLocation().pathname?.split('/')[1];
  useEffect(() => {
    setIsPage(page === 'recipe');
    console.log(page === 'recipe');
  }, [page]);

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <ConditionalWrapper
      style={{ matgin: '0', padding: '0' }}
      condition={isPage}
      wrapper={children => (
        <ThemeProvider theme={THEME.lightTheme}>{children}</ThemeProvider>
      )}
    >
      <ThemeWrap>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                >
                  <path
                    d="M2 10H26M2 2H26M2 18H18"
                    stroke={theme.palette.text.primary}
                  />
                </svg>
                {/* <Burger
              src={require('../../assets/images/header/burger.svg').default}
              alt="burger-menu"
            /> */}
              </BurgerBtn>
            )}

            {isModalShown && isBurgerShown && (
              <Modal closeModal={handleBurgerClick} />
            )}
          </HeaderContainer>
        </MainContainer>
      </ThemeWrap>
    </ConditionalWrapper>
  );
};

export default Header;
