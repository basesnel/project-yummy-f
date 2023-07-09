import { Footer } from 'components/Footer/Footer';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <p>__HEADER__</p>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
