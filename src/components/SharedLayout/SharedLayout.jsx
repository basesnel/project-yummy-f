import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { useAuth } from 'hooks';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <Header /> : null}
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {isLoggedIn ? <Footer /> : null}
    </>
  );
};

export default SharedLayout;
