import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { HeaderContainer, BurgerBtn } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormControlLabel, useTheme } from '@mui/material';
import MaterialUISwitch from './MaterialUISwitch';

const HeaderWrap = ({ onTheme }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const theme = useTheme();

  const isBurgerShown = useMediaQuery({
    query: `(max-width: 1439px)`,
  });

  const handleBurgerClick = e => {
    setIsModalShown(prev => !prev);
  };

  return (
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
  );
};
export default HeaderWrap;
// const ThemeHeaderWrap = styled('header')(({ theme }) => ({
//   display: 'flex',
//   zIndex: '100',
//   position: 'absolute',
//   top: '18px',
//   width: '343px',
//   [theme.breakpoints.up('md')]: { width: '704px' },
//   [theme.breakpoints.up('lg')]: { width: '1240px' },
// }));
