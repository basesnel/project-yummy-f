import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

const WelcomPage = lazy(() => import('../pages/WelcomPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>
      </Routes>
    </div>
  );
};
