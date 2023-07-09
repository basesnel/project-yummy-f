<<<<<<< HEAD
import Header from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <section>
      <Header />
      <h1>So Yummy</h1>
    </section>
=======
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
>>>>>>> 82da086f418e9097b6bc07db4efa1842682c2eac
  );
};

export default SharedLayout;
