import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';

import { MainContainer } from 'components/Container/Container.styled';
import THEME from 'theme';
import HeaderWrap from './HeaderWrap';

const Header = ({ onTheme }) => {
  const [isPage, setIsPage] = useState(
    useLocation()?.pathname?.split('/')[1] === 'recipe'
  );
  const page = useLocation().pathname?.split('/')[1];
  useEffect(() => {
    setIsPage(page === 'recipe');
  }, [page]);

  return (
    <MainContainer>
      {isPage ? (
        <ThemeProvider theme={THEME.lightTheme}>
          <HeaderWrap onTheme={onTheme} />
        </ThemeProvider>
      ) : (
        <HeaderWrap onTheme={onTheme} />
      )}
    </MainContainer>
  );
};

export default Header;
