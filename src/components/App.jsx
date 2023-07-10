import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

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

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<WelcomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route
                        path="/categories/:categoryName"
                        element={<CategoriesPage />}
                    />
                    <Route path="/add" element={<AddRecipePage />} />
                    <Route path="/favorite" element={<FavoritePage />} />
                    <Route path="/recipe/:recipeId" element={<RecipePage />} />
                    <Route path="/my" element={<MyRecipesPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route
                        path="/shopping-list"
                        element={<ShoppingListPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
    );
};
