import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import HousePage from 'pages/house-page';
import routes from './routes';
import HouseFormPage from '../pages/house-form-page';
import LoginPage from '../pages/auth-pages/login-page';
import RegisterPage from '../pages/auth-pages/register-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.HousePage.routePath,
        element: <HousePage />,
      },
      {
        path: routes.HouseCreatePage,
        element: <HouseFormPage />,
      },
      {
        path: routes.HouseUpdatePage.routePath,
        element: <HouseFormPage mode="update" />,
      },
      {
        path: routes.LoginPage,
        element: <LoginPage />,
      },
      {
        path: routes.RegisterPage,
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
