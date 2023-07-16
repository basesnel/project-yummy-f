import { lazy } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
// import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

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
const MotivatingModal = lazy(() =>
  import('../components/MotivatingModal/MotivatingModal')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
          }
        />
        <Route path="/main" element={<MainPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="/my" element={<MyRecipesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/*" element={<MotivatingModal />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
