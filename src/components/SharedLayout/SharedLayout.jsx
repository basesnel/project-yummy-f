import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      {/* HEADER GOES HERE */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
