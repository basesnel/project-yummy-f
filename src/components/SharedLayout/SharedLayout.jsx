import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { useAuth } from 'hooks';
import { Container, ThemeProvider, useTheme } from '@mui/material';
import THEME from 'theme';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  const [checked, setChecked] = useState(true);
  const onTheme = e => {
    setChecked(e.target.checked);
  };
  return (
    <ThemeProvider theme={checked ? THEME.lightTheme : THEME.darkTheme}>
      {isLoggedIn ? <Header onTheme={onTheme} /> : null}
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {isLoggedIn ? <Footer /> : null}
    </ThemeProvider>
  );
};

export default SharedLayout;
