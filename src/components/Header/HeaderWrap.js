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
        checked={localStorage.getItem('theme') === 'dark'}
        onChange={onTheme}
        control={<MaterialUISwitch sx={{ ml: 5 }} />}
      />
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
        </BurgerBtn>
      )}

      {isModalShown && isBurgerShown && (
        <Modal closeModal={handleBurgerClick} />
      )}
    </HeaderContainer>
  );
};
export default HeaderWrap;
