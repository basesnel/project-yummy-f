import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from 'components/Container/Container.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <MainContainer>
      <p>__HEADER__</p>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <p>__FOOTER__</p>
    </MainContainer>
  );
};

export default SharedLayout;
