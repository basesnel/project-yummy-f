import { lazy } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { useState } from 'react';
import THEME from 'theme';
import { ThemeProvider } from '@mui/material';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const VerificationPage = lazy(() => import('../pages/VerificationPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const onTheme = e => {
    setChecked(e.target.checked);
  };
  return (
    <ThemeProvider theme={checked ? THEME.darkTheme : THEME.lightTheme}>
      {/* // <ThemeProvider theme={THEME.darkTheme}> */}
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout onTheme={onTheme} />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<SigninPage />}
                />
              }
            />
            <Route
              exact
              path="/verification"
              element={
                <RestrictedRoute
                  redirectTo="/main"
                  component={<VerificationPage />}
                />
              }
            />
            <Route
              path="/main"
              element={
                <PrivateRoute redirectTo="/signin" component={<MainPage />} />
              }
            />
            <Route
              path="/categories/:categoryName"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<CategoriesPage />}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<CategoriesPage />}
                />
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<AddRecipePage />}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<FavoritePage />}
                />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <PrivateRoute redirectTo="/signin" component={<RecipePage />} />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute redirectTo="/signin" component={<SearchPage />} />
              }
            />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<ShoppingListPage />}
                />
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<NotFoundPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};
