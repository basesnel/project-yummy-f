import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import MotivatingModal from 'components/MotivatingModal/MotivatingModal';
import { useAuth } from 'hooks';

// import THEME from 'theme';

const SharedLayout = ({ onTheme }) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Header onTheme={onTheme} /> : null}
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
          <MotivatingModal />
        </main>
      </Suspense>
      {isLoggedIn ? <Footer /> : null}
      <ToastContainer autoClose={false} />
    </>
  );
};

export default SharedLayout;
